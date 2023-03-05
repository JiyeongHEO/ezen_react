/* 2023-03-05 [next] */

// export default function Id(){
//     return<>
//         <h1>/pages/sub/[id].js</h1>
//         <a href="/">/pages/index.js</a>
//     </>
// }

/* [next- router로 param가져오기] */
import { useRouter } from "next/router"
export default function Id(){

    const router = useRouter();
    const id = Number(router.query.id);

    return<>
        <h1>/pages/sub/[id].js</h1>  {/* Parameter id : 1 확인 */}

        <p>Parameter id : {id}</p>
        <a href="/">/pages/index.js</a>
    </>
}