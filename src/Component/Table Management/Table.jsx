
// import React, { Component } from 'react'
// import './Table.css';
// import Form from '../Form/Form';
// import { BrowserRouter as Router, Route, Routes, Link, matchPath  } from 'react-router-dom'

// export default class Table extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: [],
//       isShowing: false,
//       msg: [],
//       isForm: false,
//       name: '',
//       details: '',
//       fromTable: false
//     }

//   }
//   componentDidMount() {
//     fetch("https://travel-api-lous.onrender.com/api/v1/admin/trip")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isShowing: true,
//             data: result.data
//           });
//         },
//         (error) => {
//           this.setState({
//             error
//           });
//         }
//       )
//   }
//   handleCallback = (childData) => {
//     this.setState({ msg: childData })
//   }

//   formView = (clickId) => {
//     const name='';
//     const details=''
//     if (clickId === clickId.index) {
//       name = clickId.id.name.value
//       details = clickId.id.details.value
//     }
//       this.setState({
//         isForm: true,
//         name: name,
//         details: details,
//         fromTable: true
//       })


//   }

//   formShowing = () => {
//     this.setState({
//       isForm: true
//     })
//   }

//   deleteHandler=(id)=>{
//     const datas=this.state.data;
//     datas.splice(id,1);
//     this.setState({
//       data: datas
//     })
//   }

//   render() {
//     const match = matchPath("/form", {
//       path: "/form:id",
//       exact: true,
//       strict: false
//    });
//     const { msg } = this.state;
//     const { isShowing, data, error } = this.state;
//     if (error) {
//       return <div></div>;
//     } else if (!isShowing) {
//       return <div></div>;
//     } else {
//       return (
//         <>
//           <div className='tableContent' style={{ width: this.props.slidershows ? '70%' : '80%', left: this.props.slidershows ? '25%' : '10%' }}>
//             <button type='button' onClick={this.props.formShows}>
//               <Link to='/form/*'>Create</Link></button>
//             <table>
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Description</th>
//                   <th>Image</th>
//                 </tr>
//               </thead>
//               <tbody>

//                 {data.map((item,idNo) => (
//                  <tr key = { item._id }>
//                      <td >{idNo}</td>
//                      <td>{item.name}</td>
//                      <td>{item.description.slice(0,2)}</td>
//                      <td><Link to={`${path}/1`}><i className="fas fa-edit" onClick={this.formView}></i></Link><i className="fas fa-trash-alt" onClick={this.deleteHandler}></i></td>
//                  </tr>
//                  ))}

//               </tbody>
//             </table>
//           </div>
//           {
//             this.state.isForm ?
//               <Form changeingN={this.state.name} changeingD={this.state.details} fromTable={this.state.fromTable}></Form>
//               :
//               " "
//           }
//         </>
//       )
//     }
//   }
// }

// import React, { useState } from 'react'
// import './Table.css';
// import Form from '../Form/Form';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'

// export default function Table(props) {
//       const data = props?.data || [];

//       const navigate = useNavigate();
//       const [isForm, setForm]=useState(false)
//       const handleCallback = (childData) => {
//         this.setState({ msg: childData })
//       }

//       const formView = (clickId) => {
//         const name='';
//         const details=''
//         if (clickId === clickId.index) {
//           name = clickId.id.name.value
//           details = clickId.id.details.value
//         }
//           setForm(!isForm)
//           navigate('/form/*');

//       }

//       const formShowing = () => {
//         setForm(!isForm)
//       }

//       const deleteHandler=(id)=>{
//           const datas=data;
//           datas.splice(id,1);
//           this.setState({
//             data: datas
//           })
//         }

//   return (
//     <>

//       <div className='tableContent' style={{ width: props.slidershows ? '70%' : '80%', left: props.slidershows ? '25%' : '10%' }}>
//         <button type='button' onClick={props.formShows}>
//           <Link to='/form/*'>Create</Link></button>
//         <table>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Image</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//           {data.map(item=>
//             <tr>
//               <td key={item.id}></td>
//               <td id='name'>{item.name}</td>
//               <td id='details'>{item.details}</td>
//               <td></td>
//               <td><Link to='/form/*'><i className="fas fa-edit" onClick={formView}></i></Link><i className="fas fa-trash-alt" onClick={deleteHandler}></i></td>
//             </tr>
//             )}

//           </tbody>
//         </table>
//       </div>
//       {
//         isForm?
//           <Form ></Form>
//           :
//           " "
//       }
//     </>
//   )
// }


import React, { useEffect, useState } from 'react'
import './Table.css';
import Form from '../Form/PostingForm';
import { BrowserRouter as Router, Link, useNavigate, generatePath} from 'react-router-dom'
import axios  from 'axios';


export default function Table(props, { getId }) {
  const data = props?.data || [];
  const navigate = useNavigate();
  const [isForm, setForm] = useState(false)
  const [records, setRecords] = useState([])
  const [showAlert, setShowAlert]=useState(false)
  const [isdelete, setDelete]=useState('')

  // For getting data from API
  useEffect(() => {
    async function getUsers() {
      const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/trip' , {
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
    props.parentCallback(path);
   }

  // For deleting value from API
  const deleteHandler = (id) => {
    
    console.log(showAlert)
    console.log(isdelete)
    console.log(id)
    if(isdelete == 1){
      fetch(`https://travel-api-lous.onrender.com/api/v1/admin/trip/${id}`, {
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
     setShowAlert(false)
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
    <>

      <div className='tableContent' style={{ width: props.slidershows ? '70%' : '80%', left: props.slidershows ? '25%' : '10%' }}>
        <button type='button'  className='formViewButton'>
          <Link to='/Form/post-form-trip'>Create</Link></button>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.data?.map((item, index) =>
              <tr key={index}>
                <td>{index+1}</td>
                <td id='name'>{item.name}</td>
                <td id='details'>{item.description.slice(0, 2)}</td>
                <td>{item.image}</td>
                <td><Link to={`/Form/updating-form1:id/${item._id}`}><i className="fas fa-edit" onClick={() => formView(item, index)}></i></Link><i className="fas fa-trash-alt" onClick={() => deleteHandler(item._id)} ></i></td>
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
      {
        isForm ?
          <Form number={isvalue}></Form>
          :
          " "
      }
    </>
  )
}
