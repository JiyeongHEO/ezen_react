import React, { Component } from 'react';

class Counter extends Component {

    // constructor(props){   
    //     super(props);  //from 부모
    //     //console.log(this); //counter가르킴
    //     this.
        state = { number: 100,    //생략버전 
            //name: props.name,   //super.name 안되네; -> 아래서 this.props로 받으면 읽기만됨
            fixedNum: 0
        }; //state초기값
    //}

       
    render() {
        const { number, fixedNum} = this.state;
        const { name } = this.props;

        return (
            <div>

                <h1>{number} : {name}</h1>
                <h2> fix값: {fixedNum} </h2>
         
                <button onClick={
                    ()=>{this.setState((prevState1)=>({number: prevState1.number+1}));
                    /* this.setState( {number: this.state.number+1},{} );
                    this.setState((prevState)=>({number: prevState.number+1})); */
                    
                    this.setState((prevState1)=>({number: prevState1.number+1}), ()=>{
                        //callback 내용
                        console.log("setstate끝"); console.log(this.state);
                    });
                    } 

                }> +1 </button>

                <button onClick={
                    ()=>{
                        if(name === "hello"){
                            this.setState({name: "bye"}); //props에 있어서 안됨
                        }else{
                            this.setState({name: "hello"});
                        }} 
                }> say </button>


            </div>
        );
    }
}

export default Counter;