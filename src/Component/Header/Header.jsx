import React, { useDebugValue, useState } from 'react'
import './Header.css';
import Table from '../Table Management/Table'
// import { Link, useRouteMatch } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    useParams, 
    Link
  } from "react-router-dom";
import { Translate } from '@material-ui/icons';


function Header(props) {
    
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [isLoginShow, setLoginShow] = useState(false);
    const loginShowHandler = () => {
        setLoginShow(!isLoginShow);
    }

    let icon='fa-solid fa-chevron-down Down'

    const [isFormShow, setFormShow] = useState(false);
    const fromvisibleHandler = () => {
        setFormShow(!isFormShow)
        if(isFormShow){
        icon='fa-solid fa-angle-up'
        }
        else{
        icon='fa-solid fa-chevron-down Down'
        }
    }

    const [isSubForm, setSubForm] = useState(false)
    const viewSubForm=()=>{
      setSubForm(!isSubForm)
    }

  return (

    <div>
        <div className='headerContent' style={{ width: props.isShow? '80%' : '100%', left:  props.isShow? '20%' : '0%'}} >
          <nav className='upperNav'>
            <ul className='firstNav'>
              <li onClick={props.sliderShow}><i className="fa-solid fa-bars"></i></li>
              <li id='dash'><p>Dashboard</p></li>
              <li><p>Users</p></li>
              <li><p>Settings</p></li>
            </ul>
            <ul className='lastNav'>
              <li><i className="far fa-bell"></i></li>
              <li><i className="bi bi-list-ul"></i></li>
              <li><i className="bi bi-envelope-open"></i></li>
              <li onClick={loginShowHandler}><img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'></img></li>
            </ul>
          </nav>
          <nav className='downNav'>
            <p>Home</p>
            <p>/</p>
            <p>Dashboard</p>
          </nav>
          <div className='hiddenProfile' style={{ display: isLoginShow ? 'block' : 'none', left: props.isShow ? '75%' : '80%' }}>
            <ul className='hiddenProfile_Ul'>
              <li><p>Account</p></li>
              <li><a><i className="far fa-bell"></i>Updates</a><button className="btn btn-primary buttons">42</button></li>
              <li><a><i className="bi bi-envelope-open"></i>Messages</a><button className="btn btn-success buttons">42</button></li>
              <li><a><i className="bi bi-check2-square"></i>Tasks</a><button className="btn btn-danger buttons">42</button></li>
              <li><a><i className="bi bi-chat-right"></i>Comments</a><button className="btn btn-warning buttons">42</button></li>
              <li id='hiddenProfile_p'><p>Settings</p></li>
              <li><a><i className="bi bi-person"></i>Profile</a></li>
              <li><a><i className="bi bi-gear"></i>Settings</a></li>
              <li><a><i className="bi bi-credit-card"></i>Payments</a><button className="btn btn-secondary buttons" style={{ backgroundColor: 'grey', color: 'white' }}>42</button></li>
              <li id='hiddenProfile_a'><a><i className="bi bi-file-earmark"></i>Projects</a><button className='btn buttons' style={{ backgroundColor: 'blue', color: 'white' }}>42</button></li>
              <li><a><i className="bi bi-lock"></i>Lock Account</a></li>
              <li onClick={props.login}><Link to='/'><a>Sign Out</a></Link></li>
            </ul>
          </div>
        </div>

        {
            props.isShow?
            
                <div className='MainSlider' >
                    <div className='CorePart'>
                        <i className="bi bi-c-circle"></i>
                        <h5>COREUI</h5>
                        <h3>REACT.JS</h3>
                    </div>
                    <div className='ScroolPart'>
                        <ul>
                        <li className='aList'><i className="bi bi-speedometer"><a>Dashboard</a></i></li>
                        <li><p>THEME</p></li>
                        <li className='aList'><i className="bi bi-droplet"><a>Colors</a></i></li>
                        <li className='aList'><i className="bi bi-pencil"><a>Typography</a></i></li>
                        <li><p>Components</p></li>
                        <li className='aList'><i className="bi bi-puzzle"><a>Base</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
                        <li className='aList'><i className="bi bi-cursor"><a>Buttons</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
                        <li className='aList'><i className="bi bi-card-text" onClick={fromvisibleHandler}><a>Forms</a>
                        </i><i className={isFormShow? 'fa-solid fa-angle-up Down': 'fa-solid fa-chevron-down Down'} onClick={fromvisibleHandler}></i></li>
                        <li className='FormLi' style={{ display: isFormShow ? 'block' : 'none' }}>
                            <div className='UnderLi'>
                            <ul>
                                <li onClick={viewSubForm}><a>Form Control</a><i className={isSubForm? 'fa-solid fa-angle-up Down': 'fa-solid fa-chevron-down Down'} id='formDown'></i></li>
                                  <ul className='formControlUl' style={{display: isSubForm? 'block' : 'none'}}>
                                    <li><Link to='/Form/post-form-trip'><a>Form Control Trip</a></Link></li>
                                    <li><Link to='/Form/post-form-banner'><a>Form Control Banner</a></Link></li>
                                    <li><Link to='/Form/post-form-country'><a>Form Control Country</a></Link></li>
                                  </ul>
                                <li><a>Select</a></li>
                                <li><a>Checks & Radios</a></li>
                                <li><a>Range</a></li>
                                <li><a>Input Group</a></li>
                                <li><a>Floating Lables</a></li>
                                <li><a>Layout</a></li>
                                <li><a>Validation</a></li>
                            </ul>
                            </div>
                        </li>
                        <li className='aList'><i className="bi bi-pie-chart"><a>Charts</a></i></li>
                        <li className='aList'><i className="bi bi-star"><a>Icons</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
                        <li className='aList'><i className="bi bi-bell"><a>Notifications</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
                        <li className='aList'><i className="bi bi-calculator"><a>Widghts</a></i></li>
                        <li className='aList'><Link to='/trip'><a>Trip Management</a></Link></li>
                        <li className='aList'><Link to='/banner'><a>Banner Management</a></Link></li>
                        <li className='aList'><Link to='/country'><a>Country Management</a></Link></li>
                        <li><p>EXTRAS</p></li>
                        <li className='aList'><i className="bi bi-star"><a>Pages</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
                        <li className='aList'><i className="bi bi-file-earmark-text"><a>Docs</a></i></li>
                        </ul>
                    </div>
                </div>
                
            :
            
                ''
            
        }
        {/* <div className='MainSlider' >
          <div className='CorePart'>
            <i className="bi bi-c-circle"></i>
            <h5>COREUI</h5>
            <h3>REACT.JS</h3>
          </div>
          <div className='ScroolPart'>
            <ul>
              <li className='aList'><i className="bi bi-speedometer"><a>Dashboard</a></i></li>
              <li><p>THEME</p></li>
              <li className='aList'><i className="bi bi-droplet"><a>Colors</a></i></li>
              <li className='aList'><i className="bi bi-pencil"><a>Typography</a></i></li>
              <li><p>Components</p></li>
              <li className='aList'><i className="bi bi-puzzle"><a>Base</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
              <li className='aList'><i className="bi bi-cursor"><a>Buttons</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
              <li className='aList'><i className="bi bi-card-text" onClick={fromvisibleHandler}><a>Forms</a>
              </i><i className={isFormShow? 'fa-solid fa-angle-up Down': 'fa-solid fa-chevron-down Down'} onClick={fromvisibleHandler}></i></li>
              <li className='FormLi' style={{ display: isFormShow ? 'block' : 'none' }}>
                <div className='UnderLi'>
                  <ul>
                    <li onClick={props.formShow}><a>Form Control</a></li>
                    <li><a>Select</a></li>
                    <li><a>Checks & Radios</a></li>
                    <li><a>Range</a></li>
                    <li><a>Input Group</a></li>
                    <li><a>Floating Lables</a></li>
                    <li><a>Layout</a></li>
                    <li><a>Validation</a></li>
                  </ul>
                </div>
              </li>
              <li className='aList'><i className="bi bi-pie-chart"><a>Charts</a></i></li>
              <li className='aList'><i className="bi bi-star"><a>Icons</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
              <li className='aList'><i className="bi bi-bell"><a>Notifications</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
              <li className='aList'><i className="bi bi-calculator"><a>Widghts</a></i></li>
              <li className='aList'><a>Trip Management</a></li>
              <li className='aList'><a>Banner Management</a></li>
              <li><p>EXTRAS</p></li>
              <li className='aList'><i className="bi bi-star"><a>Pages</a></i><i className="fa-solid fa-chevron-down Down"></i></li>
              <li className='aList'><i className="bi bi-file-earmark-text"><a>Docs</a></i></li>
            </ul>
          </div>
        </div> */}
    </div>

  )
}
export default Header;