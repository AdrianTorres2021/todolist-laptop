import React, {useState} from 'react';
import "./App.css";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo !== ''){
      setTodos([{id:`${todo}-${Date.now()}` , todo}, ...todos])
      setTodo("");
    }

  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id)
    setTodos([...delTodo])
  };
  const handleCheckbox = (e) => {
    let valueOfInput = {...todos};
    if(e.target.checked===true){
      console.log(valueOfInput);
    }else{

    };
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className='todoForm' onSubmit={handleSubmit}>
          <input className="input-text"type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
          <button>Go</button>
        </form>

        <ul className = "allTodos">
{
  todos.map((t)=>(
  <li className = "singleTodo">
    <span className = "todoText" key={t.id}>{t.todo}</span>
    <input type="checkbox" onClick={handleCheckbox}></input>
    <button onClick={()=> handleDelete(t.id)}>Delete</button>
</li>))
}
        </ul>
      </div>
    </div>
  )
}

export default App
