import React from 'react'
import UserCard from './components/UserCard'
import './App.css'
import Deadpool from './assets/deadpool.webp'
import Ironman from './assets/i-am-ironman-4k-35.jpg'
import Thor from './assets/thor.jpg'
import SpiderMan from './assets/Profile_-_Spider-Man.webp'

const App = () => {
  return (
    <div  className='container'>
      <UserCard name="DeadPool" desc="The Marvel mesia"image={Deadpool}/>
      <UserCard name="IronMan"  desc="Best Super Hero" image={Ironman}/>
      <UserCard name="Thor" desc ="point Breaker" image={Thor}/>
      <UserCard name="spiderman" desc="Friendly and NeibourHood" image={SpiderMan}/>
    </div>
  )
}

export default App