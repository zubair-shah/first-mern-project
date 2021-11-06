
import React from "react";
import "./todo.css";
import { TextField , Button} from "@mui/material";
import { collection, addDoc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from '../../firebase'
const userCol = collection(db, "todo")

console.log(userCol);
function Todo({ todo, index, completeTodo ,removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <Button variant="success" onClick={() => completeTodo(index)}>Complete</Button>
          <Button onClick={() => removeTodo(index)} variant="contained"  color="error">Delet</Button>
        </div>
      </div>
    );
  }




function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
              <TextField
            fullWidth
            addTodo={addTodo}
            color="primary"
            id="standard-basic" label="Standard" variant="standard" 
            type="text"
            name="text"
            className="input"
            value={value}
          onChange={e => setValue(e.target.value)}
          />
      </form>
    );
  }

function MainTodo() {
    const [todos, setTodos] = React.useState([
        {
          text: "Learn about React",
          isCompleted: false
        },
        {
          text: "Meet friend for lunch",
          isCompleted: false
        },
        {
          text: "Build really cool todo app",
          isCompleted: false
        }
      ]);
      useEffect(() => {
          const getData = async () =>{
              const querySnapshot = await getDocs(userCol);
              let todo = []
              querySnapshot.forEach((doc) =>{
                  console.log(`${doc.id} => ${doc.data()}`);
                  todo.push(doc.data())
              });
              setTodos(todo)
          }
          getData()
          return () => {
             console.log("cleanup")
          };
      }, [])
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };


  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="card">
     <div className="name">
    <h1>login as zubair</h1>
     </div>

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
          
      </div>
    </div>
  );
}

export default MainTodo;