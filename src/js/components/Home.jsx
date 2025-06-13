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
    <div key={index} className="d-flex toDo-item text-start px-3 py-2">
      <div className="task d-flex align-items-center">
        <span className="border-0">{item.listItem}</span>
      </div>
      <div>
        <img 
          onClick={() => deleteToDo(index)}
          className="delete-icon"  
          src="../src/img/x.svg" 
          alt="delete" 
        />
      </div>
    </div>
  ))
)}

        

    </div>
	 
	);
};

export default Home;