import React, { useEffect, useState } from 'react'
import './CountryPost.css';
import { useNavigate } from 'react-router-dom';


function State(props) {

    const navigate = useNavigate();
    const [isTable, setTable] = useState(false)
    const [isdata, setData] = useState({})
    const [isValues, setValues] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)

    // For getting data from API
    useEffect(() => {
        async function getUsers() {
            const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/country', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });
            const finaldata = await response.json();
            setValues(finaldata);
        }
        getUsers();
    }, []);

    // For post data from API
    const buttonSubmitHandler = async (event) => {
        event.preventDefault();
        navigate('/country');
        setTable(!isTable)
        console.log(isdata)
        const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/state', {
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
        console.log(event.target.value)
        console.log(event.target.name)
    }

    return (
        <div className='container card statePostContainer countryPostContainer' style={{ width: props.slidershows ? '70%' : '80%', left: props.slidershows ? '25%' : '10%' }}>
            <h2>Required form</h2>
            <div className='underline'></div>
            <form className='form-group' onSubmit={buttonSubmitHandler}>
                <div class="form-group col-md-4" id='state'>
                    <label htmlForfor="inputState">Country</label>
                    <select id="inputState" className="form-control" name='country' onChange={subHandle}>
                        <option selected>Choose Country</option>
                        {isValues.data?.map((item, index) =>
                            <option key={index}>{item.name}</option>
                        )}
                    </select>
                </div>
                <div class="form-group col-md-4" id='state'>
                    <label htmlForfor="inputState">Region</label>
                    <select id="inputState" className="form-control" name='region' onChange={subHandle}>
                        <option selected>Choose Region</option>
                        <option>Pacific</option>
                        <option>West</option>
                        <option>Southwest</option>
                        <option>Midwest</option>
                        <option>Southeast</option>
                        <option>Northeast</option>
                        <option>USA Territories</option>
                    </select>
                </div>
                <br></br>
                <br></br>
                <div className='form-group' style={{ marginTop: '60px' }}>
                    <label>Enter your state Here: </label>
                    <br></br>
                    <input placeholder='Your state name' className='form-control' name='name' onChange={subHandle}></input>
                </div>
                <div className='form-group' style={{ marginTop: '30px' }}>
                    <label>Enter your image Here: </label>
                    <br></br>
                    <input placeholder='Your image name' className='form-control' name='image' onChange={subHandle}></input>
                </div>
                <button type='Submit' className='btn btn-success' style={{ top: '380px' }} id='stateSave'>Save</button>
            </form>
        </div>
    )
}
export default State;
