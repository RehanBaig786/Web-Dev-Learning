import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  const [theme,setTheme] = useState('light');
  const  user = {name:"rehan"}
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor: theme==='light'? "beige" : "red"}}>
          <ChildA/>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
    
  )
}

export default App
export {ThemeContext}
export {UserContext}