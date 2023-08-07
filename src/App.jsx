import { useState } from 'react'
import './App.css'
import Login from './Component/LoginPage/Login';
import Table from './Component/Table Management/Table';
import PostForm1 from './Component/Form/PostingForm';
import UpdateForm1 from './Component/Form/UpdatingForm1';
import UpdateForm2 from './Component/Form/UpdatingForm2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Component/Banner Management/Banner'
import Header from './Component/Header/Header';
import PostForm2 from './Component/Form/PostingForm2';
import Country from './Component/Country/Country'
import CountryPost from './Component/Form/CountryPost';
import State from './Component/Form/State'
import CountryUpdate from './Component/Form/CountryUpdate';

function App() {
// For getting id from Trip and Banner
  const [isChildData, setChildData]=useState('')
  const handleCallback = (TableData) => {
    setChildData(TableData)
}

  //For showing sidebar
  const [isSlider, setSlider] = useState(false)
  const sliderShowHandler = () => {
    setSlider(!isSlider)
  }

  // For passing id to child component
  const [isindex, setIndex]= useState(null)
  const formView = id => {
    console.log(id)
    setIndex(id)
  }

// For get the details if a user login or not
  const [isLoginChild, setLoginChild]=useState('')
  const getLoginData=(loginData)=>{
    setLoginChild(loginData)
  }

  // For getting the response from the API
  const [isResponseChild, setResponseChild]=useState('')
  const getResponseData=(resdata)=>{
    setResponseChild(resdata)
  }

  // For logout from the homepage
  const logOutHandler=()=>{
    setLoginChild(false)
    setResponseChild(false)
}
  return (
    <div>
      <Router>
        <>
          { isLoginChild && isResponseChild?
            <Header sliderShow={sliderShowHandler} isShow={isSlider}  login={logOutHandler}></Header>
            :
            ''
          }
        </>
        <Routes>
          <Route path="/" element={
              <>
                { isLoginChild && isResponseChild?
                  
                  <Header sliderShow={sliderShowHandler} isShow={isSlider}  login={logOutHandler}></Header>
                  :                  
                  <Login parentLoginCallback={getLoginData} parentResCallback={getResponseData}></Login>
                }
              </>
            }>
          </Route>

          <Route exact path="/Form/post-form-trip" element={
              <PostForm1 slidershows={isSlider} selectedId={isindex} selectId={isChildData}></PostForm1>
            } />
            <Route exact path="/Form/post-form-banner" element={
            <>
                <PostForm2 slidershows={isSlider} selectedId={isindex} selectId={isChildData}></PostForm2>  
              </>
            } />
          <Route exact path={`/Form/updating-form1:id/${isChildData}`} element={
            <UpdateForm1 slidershows={isSlider} selectId={isChildData} ></UpdateForm1>
          } />
          <Route exact path={`/Form/updating-form2:id/${isChildData}`} element={
            <UpdateForm2 slidershows={isSlider} selectId={isChildData} ></UpdateForm2>
          } />
          <Route path="/trip" element={
              <Table slidershows={isSlider} parentCallback={handleCallback} ></Table>
          }/>
          <Route path='/trip:id' element={<Table></Table>} />
          <Route path='/banner' element={
              <Banner slidershows={isSlider} parentCallback={handleCallback} ></Banner>
            }>
          </Route>
          <Route path='/country' element={
              <Country slidershows={isSlider} parentCallback={handleCallback}></Country>
            }>
          </Route>
          <Route path='/Form/post-form-country' element={
              <CountryPost slidershows={isSlider}></CountryPost>
            }>
          </Route>
          <Route path='/Form/post-form-state' element={
              <State slidershows={isSlider}></State>
            }>
          </Route>
          <Route path={`/Form/update-country:id/${isChildData}`} element={
              <State slidershows={isSlider} selectId={isChildData}></State>
            }>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
