/* 
*2023-02-26 시작 
*/
//  <Sample post={post} loadingPost={loadingPost} users={users} loadingUsers={loadingUsers}/>
const Sample =({loadingPost,post, loadingUsers,users})=>{
    return(<div>

        <section>
            <h1>getPost결과</h1>
            {loadingPost && 'Post 로딩중....'}
            {!loadingPost && post && (<div><h3>{post.title}</h3>  <h3>{post.body}</h3></div>)}
        </section>

        <hr/>

        <section>
            <h1>getUsers결과</h1>
            {loadingUsers && 'users 로딩중....'}
            {!loadingUsers && users && (<ul>
                { users.map(u =>   <li key={u.id}>{u.username} ({u.email})</li> ) }
            </ul>)}
        </section>
    </div>)

}

export default Sample
