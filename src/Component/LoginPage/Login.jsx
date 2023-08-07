import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';

function Login(props) {
  
  const [isSubmit, setSubmit] = useState(false);
  const [isResponse, setResponse] = useState(false);
  const [isAlert, setAlert] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmit(!isSubmit)
    axios.post('https://travel-api-lous.onrender.com/api/v1/admin/login', {
      email: data.email,
      password: data.password
    })
      .then((response) => {
        console.log(response.data)
        setResponse(response.data.status)
        if (isResponse) {
          setAlert(true)
          console.log(isResponse)
        }
        else {
          setAlert(false)
          console.log(isResponse)
        }
      })
      .catch((error) => {
        console.log(error)
      })  
      setAlert(!isAlert)
      props.parentLoginCallback(isSubmit)
      props.parentResCallback(isResponse)
  }

  const subHandle = (event) => {
    const newData = { ...data }
    newData[event.target.id] = event.target.value
    setData(newData);
    console.log(newData)
  }

  const [isPassword, setPassword]=useState('password');
  const passwordViewer=()=>{
    if(isPassword=='password'){
      setPassword('text')
    }
    else{
      setPassword('password')
    }
    
  }

  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const alertHandler=()=>{
    setAlert(false)
     setData({
      email: '',
      password: ''
     })
  }
  return (
    <div>
      <div>
        <div className=' container alert' style={{display: !isResponse &&  isSubmit? 'block':'none'}}>
          <i className="bi bi-x" onClick={alertHandler}></i>
          <h3>You have entered wrong Username and Password. Please enter right details.</h3>
        </div>
        <div className=' container card p-3 mt-2 Login_Form'>
          <h1>Login</h1>
          <form className='form-group' onSubmit={submitHandler}>
            <div className='form-group first_div'>
              <label htmlFor='email'>Enter your Username: </label>
              <input type='text' name='email' placeholder='Username' onChange={(e) => subHandle(e)} id='email' value={data.email} className='form-control' required></input>
            </div>
            <div className='form-group second_div'>
              <label htmlFor='passsword'>Enter your Password: </label>
              <input type={isPassword} placeholder='Password' name='password' onChange={(e) => subHandle(e)} id='password' value={data.password} className='form-control' required></input>
              <i className={isPassword=='password'? 'fa-solid fa-eye-slash':'fa-solid fa-eye'} onClick={passwordViewer}></i>
            </div>
            <div className='form-group third_div'>
              <input type='checkbox'></input>
              <label>Signeed In</label>
              <a><p>Forgot Password</p></a>
            </div>
            <div className='form-group forth_div'>
              <button type='submit' className='firstButton'>Login</button>
              <button type='submit' className='lastButton'>SignUp</button>
            </div>
          </form>
        </div>
      </div> 
    </div>
  )
}
export default Login;