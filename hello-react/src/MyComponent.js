import React from "react";
import Ptypes from "prop-types";

//노트: 부모-app.js
const MyComponent = ({ name, children, favNumber }) => {
  //const { name, children } = props; //비구조화: props자리에 바로 { name, children }(더줄임)

  return ( //return 하위는 무조건하나의 element
    <div>
      {name}'s First componennt
      <br />
      children값은 {children}
      <br />
      제일좋아하는 숫자는 {favNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름',
};

//* prop-types, typescript처럼, isRequired
MyComponent.prototypes = { //보통소문자시작
  name: Ptypes.string,  //보통대문자시작
  favNumber: Ptypes.number.isRequired 
};

export default MyComponent;
