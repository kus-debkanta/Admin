import React, { useEffect, useState } from 'react'
import './CountryPost.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Link, generatePath} from 'react-router-dom'

function CountryPost(props) {

    const navigate = useNavigate();
    const [isTable, setTable] = useState(false)

    const [isdata, setData] = useState({})

    const [dataLoaded, setDataLoaded] = useState(false)

    // For post data from API
    const buttonSubmitHandler = async (event) => {
        event.preventDefault();
        navigate('/Form/post-form-state');
        setTable(!isTable)
        console.log(isdata)
        const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/country', {
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
    const subHandle = (event) => {
        setData({ ...isdata, [event.target.name]: event.target.value })
    }

    return (
        <div className='container card countryPostContainer' style={{ width: props.slidershows ? '70%' : '80%', left: props.slidershows ? '25%' : '10%' }}>
            <h2>Required form</h2>
            <div className='underline'></div>
            <form className='form-group' onSubmit={buttonSubmitHandler}>
                <div className='form-group'>
                    <label>Enter your country Name Here: </label>
                    <br></br>
                    <input placeholder='Your country name' className='form-control' name='name' onChange={subHandle}></input>
                </div>
                <button type='submit' className='btn btn-success' style={{ top: '380px' }} id='countrySave'>Save</button>
            </form>
        </div>
    )
}
export default CountryPost;
