import React from "react";
import { useState } from "react"


//create your first component
const Home = () => {

    const [inputToDo, setInputToDo] = useState("");
    
    const [list, setList] = useState([]);

    function submitToDo (e){
      e.preventDefault();
      
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

       <h2 className="mt-5 text-info">Your List</h2>

       {list.map((item, index) => {
          return (
            <article key={index} className="border text-start px-3 py-2 bg-light">
              <span className="  border-0" width="100%">{item.listItem}</span>
              <img 
              onClick={() => deleteToDo(index)}
              className="float-end" width="24PX"  src="../src/img/x.svg" alt="" />
            </article>
                        )
                    })
                }

        

    </div>
	 
	);
};

export default Home;