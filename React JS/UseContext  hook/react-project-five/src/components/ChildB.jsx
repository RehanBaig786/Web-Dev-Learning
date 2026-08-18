import React, { useContext } from 'react'
import ChildC from './ChildC'
import { UserContext } from '../App'

const ChildB = () => {
    const user = useContext(UserContext)
  return (
    <div style={{backgroundColor:"greenyellow", padding:'10px',display:'flex',  flexDirection:'column', justifyContent:'center',alignItems:'center', gap:'5px'}}>
        <ChildC/>
        {user.name}
    </div>
    
)
}

export default ChildB