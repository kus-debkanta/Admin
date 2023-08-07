// import React, { useState } from 'react'
// import axios, { toFormData } from 'axios';
// import { BrowserRouter as Router, Route, Routes, Link, json } from 'react-router-dom'
// import './All.css';

// function All(props) {
//   const [isLoginShow, setLoginShow] = useState(false);
//   const [isSubmit, setSubmit] = useState(false);
//   const [isResponse, setResponse] = useState(false);
//   const [isAlert, setAlert] = useState(false);
//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   })


//   const [table, setTable] = useState(false)
//   const [isFormShow, setFormShow] = useState(false);
//   const [isSlider, setSlider] = useState(false)
//   const [isTableShowing, setTableShowing] = useState(false)


//   // For Login Show
//   const loginShowHandler = () => {
//     setLoginShow(!isLoginShow);
//   }

//   //  For Submit
//   const submitHandler = (event) => {
//     event.preventDefault();
//     setSubmit(!isSubmit)
//     axios.post('https://travel-api-lous.onrender.com/api/v1/admin/login', {
//       email: data.email,
//       password: data.password
//     })
//       .then((response) => {
//         console.log(response.data)
//         setResponse(response.data.status)
//         if (isResponse) {
//           setAlert(isAlert)
//           console.log(isResponse)
//         }
//         else {
//           setAlert(!isAlert)
//           console.log(isResponse)
//         }
//       })
//       .catch((error) => {
//         console.log(error)
//       })
      
      
//   }


//   const logOutHandler=()=>{
//     setSubmit(!isSubmit)
//     setData({
//       email: '',
//       password: ''
//     })
//   }
//   //For Input Field
//   const subHandle = (event) => {
//     const newData = { ...data }
//     newData[event.target.id] = event.target.value
//     setData(newData);
//     console.log(newData)
//   }

//   // For Form Page
//   let icon='fa-solid fa-chevron-down Down'

//   const fromvisibleHandler = () => {
//     setFormShow(!isFormShow)
//     if(isFormShow){
//       icon='fa-solid fa-angle-up'
//     }
//     else{
//       icon='fa-solid fa-chevron-down Down'
//     }
//   }

//   //For Slider Page


//   const [isPassword, setPassword]=useState('password');
//   const passwordViewer=()=>{
//     if(isPassword=='password'){
//       setPassword('text')
//     }
//     else{
//       setPassword('password')
//     }
    
//   }

//   //  Alert Handler
//   const alertHandler=()=>{
//     //  if(isAlert==false){
//     //   setAlert(true)
//     //  }
//     setAlert(false)
//      setData({
//       email: '',
//       password: ''
//      })
//   }
//   return (
//     <div>
      
//       {/* For Login Page */}
//       <div style={{ display: isSubmit && isResponse ? 'none' : 'block' }}>
//         <div className=' container alert' style={{display: isAlert &&  isSubmit? 'block':'none'}}>
//           <i className="bi bi-x" onClick={alertHandler}></i>
//           <h3>You have entered wrong Username and Password. Please enter right details.</h3>
//         </div>
//         <div className=' container card p-3 mt-2 Login_Form'>
//           <h1>Login</h1>
//           <form className='form-group' onSubmit={submitHandler}>
//             <div className='form-group first_div'>
//               <label htmlFor='email'>Enter your Username: </label>
//               <input type='text' name='email' placeholder='Username' onChange={(e) => subHandle(e)} id='email' value={data.email} className='form-control' required></input>
//             </div>
//             <div className='form-group second_div'>
//               <label htmlFor='passsword'>Enter your Password: </label>
//               <input type={isPassword} placeholder='Password' name='password' onChange={(e) => subHandle(e)} id='password' value={data.password} className='form-control' required></input>
//               <i className={isPassword=='password'? 'fa-solid fa-eye-slash':'fa-solid fa-eye'} onClick={passwordViewer}></i>
//             </div>
//             <div className='form-group third_div'>
//               <input type='checkbox'></input>
//               <label>Signeed In</label>
//               <a><p>Forgot Password</p></a>
//             </div>
//             <div className='form-group forth_div'>
//               <button type='submit' className='firstButton'>Login</button>
//               <button type='submit' className='lastButton'>SignUp</button>
//             </div>
//           </form>
//         </div>
//       </div> 
//       {/* {
//             isSubmit && isResponse? 
//             <Header login={isLoginShow} loginShow={loginShowHandler} submit={submitHandler} formShow={fromvisibleHandler} contentSize={isSlider} sliderShowing={sliderShow} tableShow={tableShowHandler}/>
//             :
//             <Login submit={submitHandler} handle={subHandle} val1={data.email} val2={data.password} response={isResponse} alert={isAlert}></Login>
//           } */}
//       {/* <Header submit={isSubmit} response={isResponse} formShow={fromvisibleHandler}></Header>

//       {/* For Home page */}
//       <div>
//         <div className='headerContent' style={{display: isSubmit && isResponse ? 'block' : 'none', width: props.sliderShowing ? '80%' : '100%', left: props.sliderShowing ? '20%' : '0px' }} >
//           <nav className='upperNav'>
//             <ul className='firstNav'>
//               <li onClick={props.sliderShow}><i className="fa-solid fa-bars"></i></li>
//               <li id='dash'><p>Dashboard</p></li>
//               <li><p>Users</p></li>
//               <li><p>Settings</p></li>
//             </ul>
//             <ul className='lastNav'>
//               <li><i className="far fa-bell"></i></li>
//               <li><i className="bi bi-list-ul"></i></li>
//               <li><i className="bi bi-envelope-open"></i></li>
//               <li onClick={loginShowHandler}><img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'></img></li>
//             </ul>
//           </nav>
//           <nav className='downNav'>
//             <p>Home</p>
//             <p>/</p>
//             <p>Dashboard</p>
//           </nav>
//           <div className='hiddenProfile' style={{ display: isLoginShow ? 'block' : 'none', left: props.sliderShowing ? '75%' : '80%' }}>
//             <ul className='hiddenProfile_Ul'>
//               <li><p>Account</p></li>
//               <li><a><i className="far fa-bell"></i>Updates</a><button className="btn btn-primary buttons">42</button></li>
//               <li><a><i className="bi bi-envelope-open"></i>Messages</a><button className="btn btn-success buttons">42</button></li>
//               <li><a><i className="bi bi-check2-square"></i>Tasks</a><button className="btn btn-danger buttons">42</button></li>
//               <li><a><i className="bi bi-chat-right"></i>Comments</a><button className="btn btn-warning buttons">42</button></li>
//               <li id='hiddenProfile_p'><p>Settings</p></li>
//               <li><a><i className="bi bi-person"></i>Profile</a></li>
//               <li><a><i className="bi bi-gear"></i>Settings</a></li>
//               <li><a><i className="bi bi-credit-card"></i>Payments</a><button className="btn btn-secondary buttons" style={{ backgroundColor: 'grey', color: 'white' }}>42</button></li>
//               <li id='hiddenProfile_a'><a><i className="bi bi-file-earmark"></i>Projects</a><button className='btn buttons' style={{ backgroundColor: 'blue', color: 'white' }}>42</button></li>
//               <li><a><i className="bi bi-lock"></i>Lock Account</a></li>
//               <li onClick={logOutHandler}><Link to='/'><a>Sign Out</a></Link></li>
//             </ul>
//           </div>
//         </div>
//         <div className='MainSlider' style={{display: isSubmit && props.sliderShowing ? 'block' : 'none'}}>
//           <div className='CorePart'>
//             <i className="bi bi-c-circle"></i>
//             <h5>COREUI</h5>
//             <h3>REACT.JS</h3>
//           </div>
//           <div className='ScroolPart'>
//             <ul>
//               <li className='aList'><i className="bi bi-speedometer"><a>Dashboard</a></i></li>
//               <li><p>THEME</p></li>
//               <li className='aList'><i className="bi bi-droplet"><a>Colors</a></i></li>
//               <li className='aList'><i className="bi bi-pencil"><a>Typography</a></i></li>
//               <li><p>Components</p></li>
//               <li className='aList'><i className="bi bi-puzzle"><a>Base</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
//               <li className='aList'><i className="bi bi-cursor"><a>Buttons</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
//               <li className='aList'><i className="bi bi-card-text" onClick={fromvisibleHandler}><a>Forms</a>
//               </i><i className={isFormShow? 'fa-solid fa-angle-up Down': 'fa-solid fa-chevron-down Down'} onClick={fromvisibleHandler}></i></li>
//               <li className='FormLi' style={{ display: isFormShow ? 'block' : 'none' }}>
//                 <div className='UnderLi'>
//                   <ul>
//                     <li onClick={props.formShow}><Link to="/Form/posting-form"><a>Form Control</a></Link></li>
//                     <li><a>Select</a></li>
//                     <li><a>Checks & Radios</a></li>
//                     <li><a>Range</a></li>
//                     <li><a>Input Group</a></li>
//                     <li><a>Floating Lables</a></li>
//                     <li><a>Layout</a></li>
//                     <li><a>Validation</a></li>
//                   </ul>
//                 </div>
//               </li>
//               <li className='aList'><i className="bi bi-pie-chart"><a>Charts</a></i></li>
//               <li className='aList'><i className="bi bi-star"><a>Icons</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
//               <li className='aList'><i className="bi bi-bell"><a>Notifications</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
//               <li className='aList'><i className="bi bi-calculator"><a>Widghts</a></i></li>
//               <li className='aList' onClick={props.tableshowing}><Link to="/trip"><a>Trip Management</a></Link></li>
//               <li className='aList' onClick={props.bannerShowing}><Link to="/banner"><a>Banner Management</a></Link></li>
//               <li><p>EXTRAS</p></li>
//               <li className='aList'><i className="bi bi-star"><a>Pages</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
//               <li className='aList'><i className="bi bi-file-earmark-text"><a>Docs</a></i></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default All;