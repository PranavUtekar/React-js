import { useState } from "react";

function ToDoList(){
    const [todoarray, inputset] = useState([])
    const [todotext, todoset] = useState("")
    return(
        <div>
            <input type="text" 
            value = {todotext}
            onChange={(event)=>{todoset(event.target.value)}} />
            <button onClick={()=>{
                inputset([...todoarray, todotext])
                
                todoset("")

            }}>Add To List</button>

            {todoarray.map((item)=> {
                
                return <div key={item}>
                    <p>{item}</p>
                    <button onClick={()=>inputset(todoarray.filter((anyitem)=>anyitem!==item))}>Delete</button>
                    </div>

            })}

            {/* <button onClick={()=>{inputset(todoarray.slice(0,todoarray.length-1))}}>Delete</button> */}

        </div>
    );
}

export default ToDoList;