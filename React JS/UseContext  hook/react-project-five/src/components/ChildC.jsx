import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

const ChildC = () => {
    const {theme,setTheme} = useContext(ThemeContext)
    // const user = useContext(UserContext)
    function toggleTheme(){
        if(theme === 'light')
            setTheme('dark')
        else
            setTheme('light')
    }
  return (
    <div style={{display:'flex',flexDirection:'column', gap:'50px', border:'1px solid black', padding:'10px', backgroundColor:"skyblue"}}>
        <button onClick={toggleTheme} style={{borderRadius:"5px", padding:'3px', background:'blue',  color:"white", boxShadow:"2px  2px 5px  blue",width:'150px',height:'40px'}}>
        Change Theme
        </button>
        {/* {user.name} */}
    </div>
  )
}

export default ChildC