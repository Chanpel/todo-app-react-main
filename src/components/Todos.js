import Todo from './Todo'

const Todos = ({todos, onDelete}) => {
   
  return (
    <div>
        {todos.map((todo) =>
        (
           <Todo key={todo.id} todo={todo} onDelete={onDelete}/>  
        ))
        }
        <p></p>
    </div>
  )
}

export default Todos
