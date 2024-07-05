import React,{ useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {UserLogin} from '../Redux/Slices/Authentecation'

const login = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    email : "",
    password : "",
  })
  const navigate = useNavigate()

  const HandleLogin = ()=>{
    dispatch(UserLogin(input))
    navigate('/')
  }

  return (
    <div className='login'>
            <h1>Login</h1>
            <input type="text" className="inputBox" placeholder='Enter Email'
            name='email'
            value={input.email}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
             />
            <input type="password" className="inputBox" placeholder='Enter Password'
            name='password'
            value={input.password}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
             />
            <button className="appButton" type="button" onClick={HandleLogin}>Login</button>
        </div>
  )
}

export default login