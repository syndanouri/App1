import React ,{useEffect, useState} from 'react'
import { signin } from '../api/auth';
import { isAuthenticated, setAuthentification } from './helpers/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()
  const handelSubmit =async()=>{
    await signin({email,password}).then((res)=>{
      console.log(res);
    setAuthentification(res.data.token,res.data.found)
    if(isAuthenticated()&& isAuthenticated().role === "admin"){
        navigate('/admin')
        }else if (isAuthenticated()&& isAuthenticated().role === "user"){
          navigate('/user')
        }
    }).catch((err)=>{
      console.log(err);
    })
  }

//   useEffect(()=>{
  
//   },[navigate])
  return (
    <div>
        <h1>Login</h1>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
         <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
         <button onClick={()=>handelSubmit()}> Login</button>
    </div>
  )
}

export default Login