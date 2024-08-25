import React from 'react'
import './Register.css'
import ProjectStore from '../../context/store'
import { useState , useContext} from 'react'

const Register = () => {

  const [state , dispatch] = useContext(ProjectStore)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')

  function UserInfo(name , surname , age , email , password , avatar){
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.email = email,
    this.password = password,
    this.avatar = avatar
  }

  const User = new UserInfo(name , surname , age , email , password , avatar)

  console.log(User)
  console.log(state)

  

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch({ type : "REGISTER", user : User })

    setName('');
    setSurname('');
    setAge('');
    setEmail('');
    setPassword('');
    setAvatar('');
    }


  
  
   

  return (
    <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Surname" required value={surname} onChange={(e) => setSurname(e.target.value)} />
            <input type="number" placeholder="Age" required value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="url" placeholder='Link for avatar' required value={avatar} onChange={(e) => setAvatar(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register