import React , { useContext } from 'react'
import './Home.css'
import ProjectStore from '../../context/store'


const Home = () => {

  const [state ] = useContext(ProjectStore)
  console.log(state)

  return (
    <div className='card-wrapper'>
      {
        state.users.map((user , index) => {
          return (
            <div className='card' key={index}>
              <img src={user.avatar} alt="" />
              <div className="card-info">
                <h2>{user.name} {user.surname}</h2>
                <p>Email :{user.email}</p>
                <p>Age :{user.age}</p>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home