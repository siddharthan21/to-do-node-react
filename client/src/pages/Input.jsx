import React, { useState } from 'react'
import axios from 'axios'
const Input = () => {
  const [value,addvalue] = useState({
    tittle:"",
    discription:""
  })
  const handle = (e) =>{
    addvalue(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleclick = async e=>{
    // e.preventDefault()
    try {
      if(value.discription !=="" && value.tittle !==""){
      await axios.post("http://localhost:5555",value)
      window.location.reload();
      }else{
        console.log("Can't be empty")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
      <div className="input-field">
        TO-Do..
          <input type="text" placeholder='Tittle'  onChange={handle}  name='tittle' />
          <input type="text" placeholder='discription' onChange={handle} name='discription' />
        <button onClick={handleclick} className='add' >Add</button>
        </div>
  )
}

export default Input
