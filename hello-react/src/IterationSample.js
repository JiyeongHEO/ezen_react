import React,{useState} from 'react';

const IterationSample = () => {

    const names = ['눈사람','얼음','눈','바람'];
    const nameList = names.map( (n) => <li>{n}</li> ) //need~~unique "key" prop.
    const nameList2 = names.map( (n, idx) => <li key={idx}>{n}</li> ) //"key" 추가

    const [names1, setnames1 ] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'},
    ]);
    const [inputText, setinputText ] = useState('')
    const [nextId, setnextId ] = useState(5);

    const onChange = (e)=> setinputText(e.target.value)
    
    const onClick = () =>{ 
        //추가하는기능. push는 nono!! -> concat yes!
        const nextNames = names1.concat({
            id: nextId,
            text: inputText
        })

        setnextId(nextId+1)
        setnames1(nextNames)
        setinputText('');
    };

    const onRemove = (id)=>{ //선택한거삭제기능. 꼭 filter! 
        const nextNames1  = names1.filter(n =>n.id !== id)
        setnames1(nextNames1)
    }

    const nameList3 = names1.map( (n) => <li key={n.id} onDoubleClick={() =>onRemove(n.id)}>{n.text}</li> ) //useStatet사용

    return (
        <>
        <input value={inputText} onChange={ onChange }></input>    

        <button onClick={ onClick }>추가</button> 

        <ul>{nameList3}</ul>
        </>
    );
};

export default IterationSample;