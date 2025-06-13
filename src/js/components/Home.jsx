import React from "react";
import { useState } from "react"


//create your first component
const Home = () => {

    const [inputToDo, setInputToDo] = useState("");
    
    const [list, setList] = useState([]);

    function submitToDo (e){
      e.preventDefault();
      if (inputToDo.trim() === "") //esto hace que evitemos mandar una tarea vacia
      return                       // hay que añadir return 
        let newItem = {listItem: inputToDo};
        setList(prev => [...prev, newItem]);
        setInputToDo("");
    }


    function deleteToDo(indexToDelete) {
    const updatedList = list.filter((_, index) => index !== indexToDelete);
    setList(updatedList);
  }
      


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

       {list.length === 0 ? (
  <p className="p-5 notask">No task defined</p>
) : (
  list.map((item, index) => (
    <div key={index} className="d-flex toDo-item text-start px-3 py-2 ">
      <div className="task d-flex align-items-center">
        <span className="border-0">{item.listItem}</span>
      </div>
      <div>
        <svg 
        onClick={() => deleteToDo(index)}
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