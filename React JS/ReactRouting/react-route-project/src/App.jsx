import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ParaComp from './components/ParaComp';
import Cources from './components/Cources';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <NavBar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <NavBar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <NavBar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:"courses",
          element: <Cources/>
        },
        {
          path:"mock-test",
          element: <MockTest/>
        },
        {
          path:"reports",
          element: <Reports/>
        }
      ]
    },
    {
      path:"/students/:id",
      element:
      <div>
        <NavBar/>
        <ParaComp/>
      </div>
    }
  ]
)
function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
