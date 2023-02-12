
/**
 * 23-02-12 시작
* [ContextAPI]: background:value.colour 이 부분, 
 */
import React, { useContext } from 'react';
import ColourContext, { ColourConsumer } from '../contexts/colour';
// const ColourBox = () => {
//     return (
//        <ColourContext.Consumer>
//        {/* 일반jsx아니고 함수형태로 들어감(Function As A Child 또는 Render Props) */}
//         {value => (<div style={ {width:'64px', height:'64px', background:value.colour} } /> )} 
//        </ColourContext.Consumer>
//     );
// };

// /**
//  * [value를 Update할때는? 동적일때]: ColourConsume를 context에서 가져옴, state 넣어서 value.state.어쩌고에서  바로 state.어쩌고
//   */
// const ColourBox = () => {
//     return (
//        <ColourConsumer>{
//         ({state}) => (
//             <> 
//             <div style={ {width:'64px', height:'64px', background: state.colour} } />
//             <div style={ {width:'32px', height:'32px', background: state.subcolour} } />
//             </>
//         )
//         }</ColourConsumer>
//     );
// };

/** 
 * [useContext hook사용]
 * */ 
const ColourBox = () => {
    const {state} = useContext(ColourContext) //여기
    
    return (
        <> 
        <div style={ {width:'64px', height:'64px', background: state.colour} } />
        <div style={ {width:'32px', height:'32px', background: state.subcolour} } />
        </>
    
    );
};


export default ColourBox;