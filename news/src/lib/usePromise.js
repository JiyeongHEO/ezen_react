
/** 23-02-12 시작 
 * [비동기hook] 
*/
import React, { useEffect, useState } from 'react';

export default function usePromise(promiseCreator, deps){
    const [loading,  setloading] = useState(false)
    const [resolved,  setresolved] = useState(null)
    const [error, seterror] = useState(null)

    useEffect(()=>{
        const process = async()=>{
            setloading(true);
            try{
                const resolved = await promiseCreator();
                setresolved(resolved);
            }catch(e){
                seterror(e)
            }
            setloading(false);
        }
        process(); //※ 비동기는 함수로실행!
    }, deps)
    
    
    return (
     [loading, resolved, error]
    );
};

