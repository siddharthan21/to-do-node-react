import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
const DataFetch = () => {
    const [todo,settodo] = useState([])

    useEffect(()=>{
        const fetchall = async ()=>{
            try {
                const res = await axios.get("http://localhost:5555/")
                settodo(res.data)
             } catch (error) {
                console.log(error)
            }
        }
        fetchall()
    },[])
    const handeldelete= async (id)=>{
        try {
            await axios.delete("http://localhost:5555/"+id)
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='head' >
      <h4>To Complete</h4>
      <ol className='list'>
      {todo.map((list,i)=>{
        return <li className='' key={list.id}>
                <h2><span>tittle:</span>{list.tittle} </h2>
                <p><span>dis: </span>{list.discription}</p>
                <div className="button">
                <button>Mark line</button>
                <button onClick={()=>handeldelete(list.id)} className='completed' >Completed!?</button>
                </div>
        </li>
})}

</ol>
    </div>
  )
}

export default DataFetch
