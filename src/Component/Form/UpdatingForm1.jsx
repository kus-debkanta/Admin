
import React, { Component , useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Form.css';

export default class UpdatingForm extends Component {
  constructor(props){
    super(props)
    this.state={
      value: {
        nameValue: null,
        desValue: null,
        imgValue: null
      },
      isDataLoaded: false,
      ID: this.props.selectId,
      data: {}
    }
  }
  componentDidMount() {
    let id=this.state.ID
    console.log(id)
    fetch(
      `https://travel-api-lous.onrender.com/api/v1/admin/trip-details/${id}`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                data: json.data,
                isDataLoaded: true  ,
            });
        })
}

  editAPI=(event)=>{
    let id=this.state.ID
    console.log(id)
    const { name, description, image } = this.state.data
    console.log(this.state.data)
    const finalData=[this.state.data]
    console.log(finalData[0])
    event.preventDefault()
    fetch(`https://travel-api-lous.onrender.com/api/v1/admin/trip/${id}`, {
      method: "PUT",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(finalData[0]),
    })
    .then((res)=>{
      res.json().then((response)=>{
        console.log(response)
      })
      
    })
    
    .catch((err)=>{
      console.log(err)
    })
  }

  handleChange=(event)=>{
    
    this.setState({
      // value: {
      //   [event.target.name] : event.target.value
      // }
      data: { ...this.state.data, [event.target.name] : event.target.value}
    })
    
}

  render() {
    const { isDataLoaded, data } = this.state;
    console.log(this.state.data)
   if (!isDataLoaded) return <div>
            <h1></h1> </div> ;
    return (
      <div className='container card formContainer' style={{ width: this.props.slidershows? '70%':'80%', left: this.props.slidershows? '25%':'10%'}}>
     <h2>Required form</h2>
     <div className='underline'></div>
     <form className='form-group' onSubmit={this.editAPI}>
           <div className='form-group'>
               <label>Enter your name: </label>
               <br></br>
                 <input type='text' className='form-control' placeholder='Your name' name='name' onChange={this.handleChange} value={this.state.data.name}></input>
           </div>
           <div className='form-group'>
               <label>Enter your details: </label>
               <br></br>
               <textarea placeholder='Your details' className='form-control' name='description' onChange={this.handleChange} value={this.state.data.description}></textarea>
           </div>
           <div className='form-group'>
               <label>Enter your images: </label>
               <br></br>
               <input placeholder='Your images' className='form-control' name='image' onChange={ this.handleChange} value={this.state.data.image}></input>
           </div>
           <div className='arrow'></div>
           <img src={`https://travel-api-lous.onrender.com/${this.state.data.image}`}></img>
           <button type='submit' className='btn btn-warning' id='edit'>Edit</button>
       </form>        
   </div>
    )
  }
}
