import React from "react";
import { useState } from "react"


//create your first component
const Home = () => {

    const [inputTodo, setInputTodo] = useState("");
    
    const [list, setList] = useState([]);

    function submitTodo (e){
      e.preventDefault();
      
      let newItem = {listItem: inputTodo};
      setList(prev => [...prev, newItem]);
      setInputTodo("");
    }

	return ( 

		<div className="container m-5 text-center " >

      <h1 className="m-5">To Do List</h1>

		  <form 
       className=" border"
       onSubmit={submitTodo} >
        
        <div className="">
          <input 
          onChange={(e) => setInputTodo(e.target.value)}
          value={inputTodo}
          type="text" className="form-control  border-0 " id="EnterToDo" placeholder="Add a new Task"/>
        </div>

      </form>

       {list.map((item, index) => {
          return (
            <article key={index} className="border">
              <span className="text-start form-control border-0">{item.listItem}</span>
            </article>
                        )
                    })
                }

        

    </div>
	 
	);
};

export default Home;