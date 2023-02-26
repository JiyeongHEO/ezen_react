/* 2023-02-19 */
//textDecoration: 밑줄css, 
//line-through: 취소선
const TodoItem = ({todo, onToggle, onRemove})=>{
    return(
        <div>

            {/* <input type="checkbox"/>
            <span> 예제 텍스트 </span>
            <button> 삭 제 </button> */}

            <input type="checkbox" onClick={()=> onToggle(todo.id)} checked={todo.done} readOnly={true}/>
            <span style ={{ textDecoration:todo.done? 'line-through' :'none'}}> {todo.text} </span>
            <button onClick={()=> onRemove(todo.id)}> 삭 제 </button>

        </div>
    )
}

const Todos = ({
        input,todos,  onChangeInput,onInsert,onToggle,onRemove
    }) => {
    console.log("콤포넌트3 Todos")
    const onSubmit = e => {
        e.preventDefault()
        onInsert(input)
        onChangeInput('');
    }
const onChange = e => onChangeInput(e.target.value)

    return (
        <div>

            <form onSubmit = {onSubmit}>
                <input value={input} onChange={onChange}/> <button type="submit">등 록</button>
            </form>
            <div>
                {todos.map(t => (
                    <TodoItem todo={t} key={t.id} onToggle={onToggle} onRemove={onRemove}/>
                ))}
            </div>

        </div>
    )

}


export default Todos;