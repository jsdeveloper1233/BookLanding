import React from 'react';

export class ExpandText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        };
    }

    expanderStyle = {
        cursor: "pointer",
        display: "inline-block"
    };

    render() {
        let visibleText = null;
        let expander = null;

        if (this.state.showFull || this.props.text.length <= this.props.maxLength) {
            visibleText = this.props.text;
        } else {
            visibleText = this.props.text.substring(0, this.props.maxLength);
        }

        const collapse = () => {
            this.setState({showFull: false});
        }

        const expand = () => {
            this.setState({showFull: true});
            console.log('expand')
        }

        if(this.props.text.length > this.props.maxLength){
            expander = this.state.showFull
                ? <span onClick={collapse} style={this.expanderStyle}><b>Zwiń</b></span>
                : <span onClick={expand} style={this.expanderStyle}><b>Rozwiń</b></span>;
        }

        return <React.Fragment>
            {visibleText} {expander}

        </React.Fragment>;
  }
}
