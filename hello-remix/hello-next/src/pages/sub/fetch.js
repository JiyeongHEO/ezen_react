/* [next - 환경번수에 저장 ]  */
// import { useEffect } from "react"

// export default function Fetch(){
//     useEffect(()=>{
//         fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
//         .then((type)=>type.json())
//         .then(result=>{
//             console.log(result);
//         })
//     })

//     return<>
//         <h1>/pages/sub/fetch.js</h1>
//         <a href="/">/pages/index.js</a>
//     </>
// }


import { useEffect, useState } from "react"
export default function Fetch(){
    const [user, setUser] = useState({name:null}); //추가
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
        .then((type)=>type.json())
        .then(result=>{
            setUser(result);
        })
    })

    return<>
        <h1>/pages/sub/fetch.js</h1>
        
        <p>{user.name}</p>
        <a href="/">/pages/index.js</a>
    </>
}