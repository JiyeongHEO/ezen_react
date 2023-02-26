import React, { Component } from 'react';
import Ptypes from "prop-types";


class MyComponent_cls extends Component {
    static defaultProps = {
        name: '기본이름',
    };
      
    //* prop-types, typescript처럼, isRequired
    static prototypes = { //보통소문자시작
        name: Ptypes.string,  //보통대문자시작
        favNumber: Ptypes.number.isRequired 
    };

    render() {
        const { name, children, favNumber } = this.props;  //비구조화 할당
        return (
            <div>
            {name}'s First componennt
            <br />
            children값은 {children}
            <br />
            제일좋아하는 숫자는 {favNumber}
            </div>
        );
    }
}


  

export default MyComponent_cls;