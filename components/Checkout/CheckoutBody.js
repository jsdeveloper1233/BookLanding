import React from 'react';
import OrderSummary from './OrderSummary';
import useForm from './userForm';
import {useRouter} from 'next/router'

function CheckoutBody({total, shipping}) {
    function handleSubmit() {
        // console.log("aaaaForm submitted.");
        // var ur = useRouter()
        // console.log(ur.query.product)
    }
    
    const stateSchema = {
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        address: {value: "", error: ""},
        city: {value: "", error: ""},
        state: {value: "", error: ""},
        zip: {value: "", error: ""},
        email: {value: "", error: ""},
        phone: {value: "", error: ""},
        newsletter: {value: false, error: ""},
        privacy: {value: false, error: ""},
        terms: {value: false, error: ""},
        comment: {value: "", error: ""}
    };

    const states = [
        "",
        "dolnośląskie",
        "kujawsko-pomorskie",
        "lubelskie",
        "lubuskie",
        "łódzkie",
        "małopolskie",
        "mazowieckie",
        "opolskie",
        "podkarpackie",
        "podlaskie",
        "pomorskie",
        "śląskie",
        "świętokrzyskie",
        "warmińsko-mazurskie",
        "wielkopolskie",
        "zachodniopomorskie"
    ];

    const validationStateSchema = {
        firstName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z\.-\s]+$/,
            error: "Niepoprawny format"
            }
        },

        lastName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z\.-\s]+$/,
            error: "Niepoprawny format"
            }
        },

        address: {
            required: true,
            validator: {
                error: "Niepoprawny format"
            }
        },

        city: {
            required: true,
            validator: {
                error: "Niepoprawny format"
            }
        },

        state: {
            required: true
        },

        zip: {
            required: true,
            validator: {
                regEx: /\d{2}-\d{3}?$/,
                error: "Niepoprawny format kodu. Poprawnie to: 12-345"
            }
        },

        email: {
            required: true,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "Niepoprawny format adresu email"
            }
        },

        phone: {
            required: true,
            validator: {
                regEx: /^(?:[+]{0,1}[0-9]●?){8,}[0-9]$/,
                error: "Niepoprawny format numeru telefonu"
            }
        },

        newsletter: {
            required: false
        },
        privacy: {
            required: true
        },
        terms: {
            required: true
        },

        comment: {
            required: false
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable, handleCheckBoxOnChange } = useForm (
        stateSchema,
        validationStateSchema,
        handleSubmit
    );
    
    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };

    return (
        <section className="checkout-area ptb-100">
            <div className="container">

                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Formularz zamówienia</h3>
                            <div className="bar"></div>

                            <div className="row">
                                {/* <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>Country <span className="required">*</span></label>
                                        
                                        <div className="select-box">
                                            <select className="form-control">
                                                <option value="Poland">Poland</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> */}

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Imię <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.firstName.value}
                                            />
                                            {state.firstName.error && <p style={errorStyle}>{state.firstName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Nazwisko <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="lastName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.lastName.value}
                                            />
                                            {state.lastName.error && <p style={errorStyle}>{state.lastName.error}</p>}
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div> */}

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Adres <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="address"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.address.value}
                                            />
                                            {state.address.error && <p style={errorStyle}>{state.address.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Town / City <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="city"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.city.value}
                                            />
                                            {state.city.error && <p style={errorStyle}>{state.city.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Miejscowość <span className="required">*</span></label>
                                            <select 
                                                name="state" 
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.state.value}>
                                                    {states.map(x => 
                                                        <option key={x} value={x}>{x}</option>
                                                    )}
                                                </select>
                                            
                                            {state.state.error && <p style={errorStyle}>{state.state.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Kod pocztowy <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="zip"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.zip.value}
                                            />
                                            {state.zip.error && <p style={errorStyle}>{state.zip.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Adres email <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.email.value}
                                            />
                                            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Numer telefonu <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="phone"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.phone.value}
                                            />
                                            {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Uwagi do zamówienia </label>
                                            <textarea 
                                                type="text" 
                                                name="comment"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.comment.value}
                                            />
                                            {state.comment.error && <p style={errorStyle}>{state.comment.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" value={state.newsletter.value} onChange={handleCheckBoxOnChange} name="newsletter" className="form-check-input form-controla" id="newsletter" />
                                            <label className="form-check-label" htmlFor="create-an-account">Tak, interesuję się takimi tematami i wyrażam zgodę na zapisanie do newslettera.</label>
                                        </div>
                                            
                                        <div className="form-check">
                                            <input type="checkbox" value={state.privacy.value} onChange={handleCheckBoxOnChange} name="terms" className="form-check-input form-controla" id="privacy" />
                                            <label className="form-check-label" htmlFor="create-an-account"><span className="required">* </span> Zapoznałam/em się z regulaminem sklepu i akceptuję go.</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" value={state.terms.value} onChange={handleCheckBoxOnChange} name="privacy" className="form-check-input form-controla" id="terms" />
                                            <label className="form-check-label" htmlFor="create-an-account"><span className="required">* </span> Wyrażam zgodę na przetwarzanie i wykorzystanie moich danych osobowych w celu realizacji zamówienia przez Life Consulting, ul. Bluszczańska 32/1, 00-712 Warszawa, NIP: 5222841056, który jest administratorem danych osobowych zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE i ustawy o ochronie danych osobowych z dnia 10 maja 2018 r. (Dz.U. 2018 poz. 1000).</label>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                            <label className="form-check-label" htmlFor="ship-different-address">Ship to a different address?</label>
                                        </div>
                                    </div> */}

                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Order Notes" className="form-control" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <OrderSummary disabled={disable} email={state.email.value} name={"imię: " + state.firstName.value +  "Nazwisko: " + state.lastName.value} address={state.address.value} city={state.city.value} state={state.state.value} zip={state.zip.value} phone={state.phone.value} newsletter={state.newsletter.value} privacy={state.privacy.value} terms={state.terms.value} comment={state.comment.value}/>

                    </div>
                </form>
            </div>
        </section>
    );
}

export default CheckoutBody
