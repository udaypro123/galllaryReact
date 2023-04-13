import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { authcontext } from './context'
const Nav = () => {
const {input,setinput}=useContext(authcontext)
  return (
    <>
      <div className='navbar'>
      <input type="text" placeholder='search here' value={input} onChange={(e)=>{
            setinput(e.target.value)
      }}/>
      <Link to="/"> Home</Link>
      </div>
    </>
  )
}

export default Nav
