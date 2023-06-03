import React,{useState} from 'react'
import { signup } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const navigate = useNavigate();
  const handelSubmit =async()=>{
    await signup({name,email,password}).then((res)=>{
      console.log(res);
      navigate('/login')
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
        <h1> Sign In </h1>
        <div>
            <input type="text" placeholder='userName' onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=>handelSubmit()}> Register</button>
        </div>
    </div>
  )
}

export default Register