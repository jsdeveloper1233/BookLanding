import { useState, useEffect, useCallback } from "react";

function useForm(stateSchema, validationSchema = {}, callback) {
    const [state, setState] = useState(stateSchema);
    const [disable, setDisable] = useState(true);
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        setDisable(true);
    }, []);

    useEffect(() => {
        if (isDirty) {
            setDisable(validateState());
        }
    }, [state, isDirty]);

    // Used to disable submit button if there's an error in state
    // or the required field in state has no value.
    // Wrapped in useCallback to cached the function to avoid instensive memory leaked
    // in every re-render in component
    const validateState = useCallback(() => {
        const hasErrorInState = Object.keys(validationSchema).some(key => {
            const isInputFieldRequired = validationSchema[key].required || (validationSchema[key].vatRequired && state['vat'].value);
            // Get state value
            const stateValue = state[key].value;
            const stateError = state[key].error;

            return (isInputFieldRequired && !stateValue) || stateError;
        });

        return hasErrorInState;
    }, [state, validationSchema]);

    function handleSelectAllOnChange(event) {
        setIsDirty(true);

        const value = !state.selectAll.value;

        changeCheckBox("selectAll", value, false);
        changeCheckBox("privacy", value, false);
        changeCheckBox("terms", value, false);
        changeCheckBox("newsletter", value, false);
    }

    function handleOnChange(event) {
        setIsDirty(true);

        const name = event.target.name;
        const value = event.target.value;
        let error = "";
        if (validationSchema[name].required || (validationSchema[name].vatRequired && state['vat'].value)) {
            if (!value) {
                error = "Pole obowiązkowe.";
            }
        }

        if (
            validationSchema[name].validator !== null &&
            typeof validationSchema[name].validator === "object"
        ) {
            if (validationSchema[name].validator.regEx){
                if (value && !validationSchema[name].validator.regEx.test(value)) {
                    error = validationSchema[name].validator.error;
                }
            }
        }

        setState(prevState => ({
            ...prevState,
            [name]: { value, error }
        }));
    }
    function handleCheckBoxOnChange(event) {
        setIsDirty(true);

        const name = event.target.name;
        const value = event.target.checked;
        changeCheckBox(name, value, true);
    }

    function changeCheckBox(name, value, check)
    {
        let error = "";
        if (validationSchema[name].required || (validationSchema[name].vatRequired && state['vat'].value)) {
            if (!value) {
                error = "Pole obowiązkowe.";
            }
        }

        if (
            validationSchema[name].validator !== null &&
            typeof validationSchema[name].validator === "object"
        ) {
            if (validationSchema[name].validator.regEx){
                if (value && !validationSchema[name].validator.regEx.test(value)) {
                    error = validationSchema[name].validator.error;
                }
            }
        }

        setState(prevState => ({
            ...prevState,
            [name]: { value, error }
        }));

        if(check){
            checkAll();
        }

    }

    function checkAll() {
        setState(prevState => ({
            ...prevState,
            ["selectAll"]: { value: prevState.terms.value && prevState.newsletter.value && prevState.privacy.value }
        }));
    }

    function handleOnSubmit(event) {
        event.preventDefault();

        // Making sure that validateState returns false
        // Before calling the submit callback function
        if (!validateState()) {
            callback();
        }
    }

    return { state, disable, handleOnChange, handleOnSubmit, handleCheckBoxOnChange, handleSelectAllOnChange };
}

export default useForm;
