import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  const [isLoggedin,setLoggedin] = useState(false)
    // if(isLoggedin){
    //   return <Logout/>
    // }else{
    //   return <Login/>
    // }
    // return(
    //   <div>
    //     {isLoggedin ? <Logout/> : <Login/>}
    //   </div>
    // )

    if(!isLoggedin){
      return <Login/>
    }

    return(
      <div>
        <h2>Welcome to Mysore city</h2>
        <div>
          {isLoggedin && <Logout/>}
        </div>
      </div>
    )
}

export default App
