
import React, { Component } from 'react'
import './Form.css';
import axios from 'axios';

// const res = await DocumentPicker.pick({
//   type: [DocumentPicker.types.allFiles],
// });

export default class UpdatingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        nameValue: null,
        desValue: null,
        imgValue: null
      },
      isDataLoaded: false,
      ID: this.props.selectId,
      data: {},
      isImage: false,
      selectedFile: null,
      formFolder: false,
      selectedFileName: null,
    }
  }
  componentDidMount() {
    let id = this.state.ID
    console.log(id)
    fetch(
      `https://travel-api-lous.onrender.com/api/v1/admin/banner-details/${id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json.data,
          isDataLoaded: true,
        });
      })
  }

  editAPI = (event) => {
    let id = this.state.ID
    console.log(id)
    const { name, description, image } = this.state.data
    console.log(this.state.data)
    const finalData = [this.state.data]
    console.log(finalData)
    console.log(finalData[0])
    event.preventDefault()
    fetch(`https://travel-api-lous.onrender.com/api/v1/admin/banner/${id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(finalData[0]),
    })
      .then((res) => {
        res.json().then((response) => {
          console.log(response)
        })

      })

      .catch((err) => {
        console.log(err)
      })
  }

  handleChange = (event) => {

    this.setState({
      selectedFile: event.target.files,
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
    console.log(event.target.name)
    console.log(event.target.value)
  }

  // fileUpload = () => {
  //   let id = this.state.ID
  //   // Create an object of formData
  //   let formData = new FormData();
 
  //   // Update the formData object
  // //   formData . append(
  // //     // "myFile",
  // //     // this.state.selectedFile[0],
  // //     // this.state.selectedFile[0].name

  // // );
  // const file=this.state.selectedFile
  //  formData.append('myFile', this.state.selectedFile);


  //   console.log(this.state.selectedFile);
  //   // Edit image to api
  //   fetch('https://travel-api-lous.onrender.com/api/v1/admin/banner/upload', {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWl0YUBnbWFpbC5jb20iLCJwYXNzd29yZCI6InNhbWl0YTEyMyIsImZ1bGxuYW1lIjoic2FtaXRhIiwiaWF0IjoxNjg4MDM2MDE1fQ.4026o8Ln98miqQYYqi3iFcd0uuy5gPfxYn9q-Wrw6s8",
  //       "usertype": "Admin",
  //       "charset" : "UTF-8"
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => {
  //       // res.json()
  //       // .then((response) => {
  //       //   console.log(response)
  //       // })
  //        console.log(res)
  //     })

  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     console.log(this.state.formData)

  //      }


     // axios({
      //   method: 'post',
      //   url: 'https://travel-api-lous.onrender.com/api/v1/admin/banner/upload',
      //   data: formData,
      //   headers: {
      //     "Accept": "application/json",
      //     "Content-Type": "application/json",
      //     "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWl0YUBnbWFpbC5jb20iLCJwYXNzd29yZCI6InNhbWl0YTEyMyIsImZ1bGxuYW1lIjoic2FtaXRhIiwiaWF0IjoxNjg4MDM2MDE1fQ.4026o8Ln98miqQYYqi3iFcd0uuy5gPfxYn9q-Wrw6s8",
      //     "usertype": "Admin"

      //  },
      // })
      //   .then((response) => console.log(response))
      //   .catch((err) => console.log(err));
    //}

  //   fileUpload = async () => {
  //     //Check if any file is selected or not
  //     console.log(this.state.selectedFile)
  //     if (this.state.selectedFile != null) {
  //       //If file selected then create FormData
  //       const fileToUpload = this.state.selectedFile
  //       const data = new FormData()
  //       data.append('name', 'Image Upload')
  //       data.append('file_attachment', fileToUpload)
  //       let res = await fetch ('https://travel-api-lous.onrender.com/api/v1/admin/banner/upload' , {
  //           method: "post",
  //           body: data,
  //           mode: "cors",
  //           cache: "no-cache",
  //           credentials: "same-origin",
  //           headers: {
  //             "Accept": "application/json",
  //         "Content-Type": "application/json",
  //         "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWl0YUBnbWFpbC5jb20iLCJwYXNzd29yZCI6InNhbWl0YTEyMyIsImZ1bGxuYW1lIjoic2FtaXRhIiwiaWF0IjoxNjg4MDM2MDE1fQ.4026o8Ln98miqQYYqi3iFcd0uuy5gPfxYn9q-Wrw6s8",
  //         "usertype": "Admin"
  //           }
  //         }
  //       )
  //       let responseJson = await res.json();
  //       if (responseJson.status == 1) {
  //         alert('Upload Successful');
  //       }
  //     }
  //     else {
  //       //if no file selected the show alert
  //       alert('Please Select File first');
  //     }
  // };
  
  fileUpload = async () => {
    if (this.state.selectedFile != null) {
      const fileToUpload = this.state.selectedFile;
      const data = new FormData();
      
      data.append('file_attachment', fileToUpload);
      let res = await fetch(
        'https://travel-api-lous.onrender.com/api/v1/admin/banner/upload',
        {
          method: 'post',
          body: data,
          headers: {
            "Accept": "application/json",
          "Content-Type":  'application/x-www-form-urlencoded; charset=UTF-8',
          "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWl0YUBnbWFpbC5jb20iLCJwYXNzd29yZCI6InNhbWl0YTEyMyIsImZ1bGxuYW1lIjoic2FtaXRhIiwiaWF0IjoxNjg4MDM2MDE1fQ.4026o8Ln98miqQYYqi3iFcd0uuy5gPfxYn9q-Wrw6s8",
          "usertype": "Admin"
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      alert('Please Select File first');
    }
};



  render() {
    console.log(this.state.data)
    console.log(this.state.selectedFileName)
    const { isDataLoaded, data } = this.state;
    console.log(this.state.data)
    if (!isDataLoaded) return <div>
      <h1></h1> </div>;
    return (
      <div className='container card formContainer' style={{ width: this.props.slidershows ? '70%' : '80%', left: this.props.slidershows ? '25%' : '10%' }}>
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
            {/* {
              this.state.selectedFile === null?
              <input placeholder='Your images' className='form-control' name='image' onChange={this.handleChange} value={ this.state.data.image }></input>
              :
              <input placeholder='Your images' className='form-control' name='image' onChange={this.handleChange} value={`uploads/banner/${this.state.selectedFileName}`}></input>
            } */}
            <input placeholder='Your images' className='form-control' name='image' onChange={this.handleChange} value={this.state.selectedFile === null? this.state.data.image : `uploads/banner/${this.state.selectedFileName}`}></input>
          </div>
          {/* <div className='arrow'></div> */}
          <img src={this.state.selectedFile === null? `https://travel-api-lous.onrender.com/${this.state.data.image}` : this.state.selectedFile}></img>
          <button type='submit' className='btn btn-warning' id='edit'>Edit</button>
          {/* Image Upload from desktop */}
          <div className='Upload'>
              <input type="file" onChange={ (event) => {this.setState({selectedFile: URL.createObjectURL(event.target.files[0]),selectedFileName: event.target.files[0].name})}} name='image'/>
                <button onClick={this.fileUpload} className='btn btn-primary' type='button'>
                  Upload!
                </button>
          </div>
        </form>
      </div>
    )
  }
}
