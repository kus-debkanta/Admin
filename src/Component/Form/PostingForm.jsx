import React, { useEffect, useState } from 'react'
import './Form.css';
import { useNavigate} from 'react-router-dom';
import Table from '../Table Management/Table';

function PostingForm(props) {

  const navigate = useNavigate();
  const [isTable, setTable]=useState(false)

  const [isdata, setData]= useState({})

  const [dataLoaded, setDataLoaded]=useState(false)

  // For post data from API
  const buttonSubmitHandler= async (event)=>{
     event.preventDefault();
     navigate('/trip');
     setTable(!isTable)

    const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/trip', {
      method: 'POST',
      body: JSON.stringify(isdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);

}

  // For getting value from input field
  const subHandle=(event)=>{
    setData({...isdata, [event.target.name]: event.target.value})
  }

  return (
    <div className='container card formContainer' style={{ width: props.slidershows? '70%':'80%', left: props.slidershows? '25%':'10%'}}>
      <h2>Required form</h2>
      <div className='underline'></div>
      <form className='form-group' onSubmit={buttonSubmitHandler} style={{height: '330px'}}>
          <div className='form-group'>
              <label>Enter your name: </label>
              <br></br>
                <input type='text' className='form-control' placeholder='Your name' name='name' onChange={subHandle} ></input>
          </div>
          <div className='form-group'>
              <label>Enter your details: </label>
              <br></br>
              <textarea placeholder='Your details' className='form-control' name='description' onChange={ subHandle} ></textarea>
          </div>
          <div className='form-group'>
              <label>Enter your images: </label>
              <br></br>
              <input placeholder='Your images' className='form-control' name='image' onChange={subHandle}></input>
          </div>
          <button type='Submit' className='btn btn-success' style={{top: '380px'}} id='save'>Save</button>
      </form>      
      {
        isTable? <Table istableShow={isTable}></Table>
        :
        " "
      } 
    </div>
  )
} 
export default PostingForm;
    
// import React, { Component } from 'react'
//  import './Form.css';
//  import {Routes, Route, useNavigate} from 'react-router-dom';
//  import Table from '../Table Management/Table';

// export default class Form extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       name: '',
//       details: ''

//     }
//   }
//  buttonSubmitHandler=(event)=>{
//     event.preventDefault();
//     const navigate = useNavigate();
//     navigate('/trip');
//     this.setState({
//       name: event.target.name.value,
//       details: event.target.name.value
//     })
//    this.props.parentCallback(this.setState);

//     }

//   render() {
//     return (
//       <div className='container card formContainer' style={{display: this.props.formshow?'block':'none', width: this.props.slidershows? '70%':'80%', left: this.props.slidershows? '25%':'10%'}}>
//        <div className='underline'></div>
//        <h2>Required form</h2>
//        <form className='form-group' onSubmit={this.buttonSubmitHandler}>
//            <div className='form-group'>
//                <label>Enter your name: </label>
//                <br></br>
//                <input type='text' className='form-control' placeholder='Your name' name='name'></input>
//            </div>
//            <div className='form-group'>
//                <label>Enter your details: </label>
//                <br></br>
//                <textarea placeholder='Your details' className='form-control' name='details'></textarea>
//            </div>
//            <button type='Submit' className='btn btn-success'>Save</button>
//        </form>
      
//      </div>
//     )
//   }
// }
