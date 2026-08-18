import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    function handleClick(){
        navigate('/dashboard');
    }
  return (
    <div>
        <h1>About page</h1>
        <button onClick={handleClick}>
            Move to Dashboard Page
       </button>
    </div>
  )
}

export default About