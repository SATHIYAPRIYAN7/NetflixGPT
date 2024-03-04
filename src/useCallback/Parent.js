import React ,{ useState, useCallback } from 'react'
import Child from "./Child";
import Todos from './Todo';

function Parent() {

    const [no, setNo] = useState(0)
    const [nos, setNos] = useState(0)
    const [todos, setTodos] = useState([]);

     console.log("render parent");

    const addTodo = useCallback(() => {
        console.log("addtodo");
      setTodos((t) => [...t, "New Todo"]);
    },[todos]);
  
  return (
    <>
    <div>Parent</div>
    <input type='text' value={no} onChange={(e)=>setNo(e.target.value)}></input>
    <div>
        {no}
    </div>

    <div>========================================================================================</div>
    {<Child no={nos} setNo={setNos}/>}
    
    <div>========================================================================================</div>
    <Todos todos={todos} addTodo={addTodo} />
    </>
  )
}

export default Parent