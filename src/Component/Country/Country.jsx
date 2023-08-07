import React, { useState , useEffect } from 'react'
import { BrowserRouter as Router, Link, useNavigate, generatePath} from 'react-router-dom'
import './Country.css';

export default function Country(props) {
    
    const [isForm, setForm] = useState(false)
  const [records, setRecords] = useState([])
  const [showAlert, setShowAlert]=useState(false)
  const [isdelete, setDelete]=useState('')

  // For getting data from API
  useEffect(() => {
    async function getUsers() {
      const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/state' , {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
      const finaldata = await response.json();
      setRecords(finaldata);
    }
    getUsers();
  }, []);


  //  For view form page and pass ID to the APP.jsx
  const [isvalue, setValue] = useState()
  let path='';

   const formView = (item, index) => {
    setForm(!isForm)
    setValue(index)
    path=item._id
    console.log(path)
    props.parentCallback(path);
  }

  // For deleting value from API
  const deleteHandler=(id)=>{
    
    console.log(showAlert)
    console.log(isdelete)
    console.log(id)
    if(isdelete == 1){
      fetch(`https://travel-api-lous.onrender.com/api/v1/admin/state/${id}`, {
        method: 'DELETE' 
       })
     .then(async response => {
         const data = await response.json();
         if (!response.ok) {
             const error = (data && data.message) || response.status;
             return Promise.reject(error);
         }
         console.log('Deleted done')
     })
     .catch(error => {
         
         console.log('There was an error!'+ error);
     });
     
    }
    else{
      setShowAlert(false)
    }
    deleteAlert()
  }

  const deleteAlert=()=>{
    setShowAlert(!showAlert)
  }
  return (
    <div>
        <div className='tableContent' style={{ width: props.slidershows ? '70%' : '80%', left: props.slidershows ? '25%' : '10%' }}>
        <button type='button' className='formViewButton'>
          <Link to='/Form/post-form-country'>Create</Link></button>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Country</th>
              <th>Region</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          {records.data?.map((item, index) =>
              <tr key={index}>
                <td>{index+1}</td>
                <td id='name'>{item.name}</td>
                <td id='country'>{item.country}</td>
                <td id='region'>{item.region}</td>
                <td id='image'>{item.image}</td>
                <td><Link to={`/Form/update-country:id/${item._id}`}><i className="fas fa-edit" onClick={() => formView(item, index)}></i></Link><i className="fas fa-trash-alt" onClick={() => deleteHandler(item._id)} ></i></td>
              </tr>
          )}
          </tbody>
        </table>
        {
          showAlert?
          (
            <div className='deleteAlert'>
              <div class="alert alert-warning alertDiv" role="alert">This is a warning alert—check it out!</div>
              <i class="fa-solid fa-x" onClick={deleteAlert}></i>
              <div className='buttons-area'>
                <button className='btn btn-danger' onClick={() => {setDelete(1)}}>Ok</button>
                <button className='btn btn-primary' onClick={deleteAlert}>Cancel</button>
              </div>
            </div>
          )
          :
          (
           ""
          )
        }
      </div>
    </div>
  )
}
