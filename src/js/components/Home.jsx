import React from "react";
import { useState, useEffect } from "react"


//create your first component
const Home = () => {

    const [inputToDo, setInputToDo] = useState(""); //useState para agregar tareas
    
    const [list, setList] = useState([]);           //useState para modificar la lista

    const getUser = async () => {                                                             //Añadir el usuario GET
      let result = await fetch("https://playground.4geeks.com/todo/users/Alex_Espl%C3%A1");
      let data = await result.json();
      setList(data.todos)
    };

    const postTodos = async () => {
    await fetch("https://playground.4geeks.com/todo/todos/Alex_Espl%C3%A1", {  //añadir tarea POST
      method: "POST",
      body: JSON.stringify(
        {
          "label": inputToDo,
          "is_done": false
        }
      ),
      headers: { "Content-type": "application/json"}
      });
         await getUser();       // Actualiza la lista tras agregar la tarea
         setInputToDo("");      // Limpia el input después de enviar
    };

    const putTodos = async (todo_id) => {
      await fetch(`https://playground.4geeks.com/todo/todos/${todo_id}`, {
      method: "PUT",
      body: JSON.stringify(
        {
          "label": "string",
          "is_done": true
        }
      ),
      headers: { "Content-type": "application/json"}
      })
    };

    const deleteToDo = async (todo_id) => {
      await fetch(`https://playground.4geeks.com/todo/todos/${todo_id}`, {
      method: "DELETE",
      });
        await getUser();    //actualiza la lista despues de eliminar
    };

    useEffect(() => {
    getUser();
    }, []);

   function submitToDo (e){         //funcion para agregar tareas a la lista
      e.preventDefault();            //para que no se borre al actualizar
      if (inputToDo.trim() === "") //esto hace que evitemos mandar una tarea vacia
      return;
      postTodos();
    };  


	return ( 
      <div className="container text-center m-auto" >

      <h1 className="m-5">To Do List</h1>

		  <form 
       className=" border"
       onSubmit={submitToDo} >
        
        <div className="">
          <input 
          onChange={(e) => setInputToDo(e.target.value)}
          value={inputToDo}
          type="text" className="form-control  border-0 " id="EnterToDo" placeholder="Add a new Task"/>
        </div>

      </form>
      
       <h2 className="m-5 text-info">Your List</h2>

       {list.length === 0 ? (<p className="p-5 notask">No task defined</p>) :                           //condicional si el numero de elementos dentro del array es 0

        (list.map((item, index) => (
    <div key={index} className="d-flex toDo-item text-start px-3 py-2 ">
      <div className="task d-flex align-items-center">
        <span className="border-0">{item.label}</span>
      </div>
      <div>
        <svg 
        onClick={() => deleteToDo(item.id)}
        xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x delete-icon" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>    
      </div>
    </div>
  ))
)}

        

    </div>
	 
	);
};

export default Home;