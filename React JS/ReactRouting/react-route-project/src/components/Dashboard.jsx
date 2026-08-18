import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
    const navigate = useNavigate();

    function handleClick(){
        navigate('/');
    }
  return (
    <div className='Db'>
        <h1>Dashboard page</h1>
        <ul>
          <li>
            <Link to="/dashboard/courses">Courses</Link>
          </li>
          <li>
            <Link to="/dashboard/mock-test">Mock-Test</Link>
          </li>
          <li>
            <Link to="/dashboard/reports">Reports</Link>
          </li>
        </ul>
        <Outlet/>
        <br/>
        <br/>
        <button onClick={handleClick}>
            Move to Home Page
       </button>
    
    </div>
  )
}

export default Dashboard