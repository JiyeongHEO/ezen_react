/** 23-02-12 시작 */
// import {createContext} from 'react';

// const ColourContext = createContext({colour: 'black'}) //여기

// export default ColourContext;


/**
 * [value를 Update할때는? 동적일때]: ColourConsumer(조회), Provider(업데이트)
  */
import {createContext, useState} from 'react';


const ColourContext = createContext({
    state:{ colour:'black', subcolour:'red'},
    actions:{ setcolour:()=>{}, setsubcolour:()=>{}}
});

//children 오타나면 실행안됨;;;
const ColourPorvider = ( {children} )=>{
   const [colour, setcolour] = useState('black')
   const [subcolour, setsubcolour] = useState('red')

   const value = {
    state:{ colour, subcolour },
    actions:{ setcolour, setsubcolour }
   }
   return (
    <ColourContext.Provider value={value}> {children} </ColourContext.Provider>
   )  
}

// const ColourConsumer = ColourContext.Consumer 와 같은의미
const {Consumer: ColourConsumer} = ColourContext

export {ColourPorvider, ColourConsumer} ;

export default  ColourContext;