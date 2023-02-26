//ref: [ 1.callBack방식 ]
// import React, { Component } from 'react';
// import './ValidationSample.css'

// class ValidationSample extends Component {
//     state = { password: '', clicked: false, validated: false } 

//     handleChange = (e) => {
//         this.setState( { password: e.target.value  }) 
//     }

//     handleButtonClick = () => {
//         this.setState( { clicked: true, validated: this.state.password === '0000'  });
//         this.ainput.focus();  //ref를 사용한 callback, input에 접근하기위한 ref
//     }

//     //ref: 버튼클릭후 focus()추가, createRef
//     render() {
//         return (
//             <div>
                
//             <input ref={(refa)=>(this.ainput=refa)} type="password" value={this.state.password} onChange={this.handleChange} className ={this.state.clicked?(this.state.validated? 'success' : 'failure'): '' } ></input>

//             <button onClick={this.handleButtonClick}>Validate</button>

//             </div>
//         );
//     }
// }

// export default ValidationSample;




//ref: [ 2.createReact()방식 ]
import React, { Component } from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    state = { password: '', clicked: false, validated: false } 

    ainput = React.createRef(); //차이점

    handleChange = (e) => {
        this.setState( { password: e.target.value  }) 
    }

    handleButtonClick = () => {
        this.setState( { clicked: true, validated: this.state.password === '0000'  });
        this.ainput.current.focus();  //차이점

    }

    render() {
        return (
            <div>
            <input ref={ this.ainput } type="password" value={this.state.password} onChange={this.handleChange} className ={this.state.clicked?(this.state.validated? 'success' : 'failure'): '' } ></input>

            <button onClick={this.handleButtonClick}>Validate</button>

            </div>
        );
    }
}

export default ValidationSample;