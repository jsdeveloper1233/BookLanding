import React from 'react';

export class ExpandText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        };
    }

    render() {
        let visibleText = null;
        let expander = null;

        if (this.state.showFull || this.props.text.length <= this.props.maxLength) {
            visibleText = this.props.text;
        } else {
            visibleText = this.props.text.substring(0, this.props.maxLength);
        }

        const self = this;
        const clickHandler = () => {
            self.setState({showFull: !self.state.showFull});
        }

        if(this.props.text.length > this.props.maxLength){
            expander = this.state.showFull
                ? <span onClick={clickHandler}><b>Zwiń</b></span>
                : <span onClick={clickHandler}><b>Rozwiń</b></span>;
        }

        return <React.Fragment>
            {visibleText} {expander}

        </React.Fragment>;
  }
}
