import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

function TodoApp() {
    const [todos,setToods] = useState([]);
    const [input,setInput] = useState('');

    useEffect(()=>{
        const savedTodos = Cookies.get('todos');
        if(savedTodos){
            setToods(JSON.parse(savedTodos));
        }
    },[]);

    const AddTodo = () => {
        // if(input.trim()=== '') return );
        const newTodos = [...todos,input.trim()];
        setToods(newTodos);
        Cookies.set('todos',JSON.stringify(newTodos),{expires:7})
        setInput('');
        // console.log(input)

    }
    const deleteTodo = (index) =>{
        const newTodos = todos.filter((_,i)=> i !== index);
        setToods(newTodos);
        Cookies.set('todos',JSON.stringify(newTodos),{expires:7})

    }
  return (


    <div className='container'><h1>TodoApp

    </h1>
    <input type="text" 
     value={input} onChange={(e)=> setInput(e.target.value)}
    />
    <button onClick={AddTodo}>Add</button>
    <ul>
        {todos.map((todo,index) => <li style={{listStyleType:'none'}}   key={index}>{todo}
        <button  onClick={() => deleteTodo(index)} style={{margin:'10px 20px'}} type="button" class="btn btn-danger">Danger</button>

        </li>
    )}

    </ul>

    </div>
  )
}

export default TodoApp