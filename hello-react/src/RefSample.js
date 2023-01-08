import React, { Component } from 'react';

class RefSample extends Component {

    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus(); //차이점
    }

    render() {
        return (
            <div>
                <input ref={this.input}></input>
            </div>
        );
    }
}

export default RefSample;