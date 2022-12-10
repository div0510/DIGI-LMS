import React from 'react'
import { NavLink } from 'react-router-dom'
import Header2 from './Header2'



const Home = () => {
  return (
    <>
    
      <Header2 />
      <h1>Main Home</h1>
      <div className="d-flex row space-between">
        <button>
          <NavLink to='../../main/userlogin' className="nav-link" >
            Lo gin In as User
          </NavLink>
        </button>
        <button>
          <NavLink to='../trainerlogin' className="nav-link" >
            Lo gin In as tRAINER
          </NavLink>
        </button>
      </div>
    </>
  )
}

export default Home