import React, { Component } from 'react'
import './ScroolBar.css';
import Table from '../Table Management/Table';

class ScroolBar extends Component {
  constructor(props){
    super(props)
    this.state={
      tripshow: false
    }
  }
  render() {

    const tableShowHandler=(event)=>{
      this.setState({
        tripshow: true
      })
    }
    return (
      <div className='MainSlider'>
        <div className='CorePart'>
            <i className="bi bi-c-circle"></i>
            <h5>COREUI</h5>
            <h3>REACT.JS</h3>
        </div>
        <div className='ScroolPart'>
            <i className="bi bi-speedometer">Dashboard</i>
            <p>THEME</p>
            <i className="bi bi-droplet"><a>Colors</a></i>
            <i className="bi bi-pencil"><a>Typography</a></i>
            <p>Components</p>
            <i className="bi bi-puzzle"><a>Base</a></i><i className="fa-solid fa-chevron-down Down"></i>
            <i className="bi bi-cursor"><a>Buttons</a></i><i className="fa-solid fa-chevron-down Down"></i>
            <i className="bi bi-card-text"><a>Forms</a></i><i className="fa-solid fa-chevron-down Down"></i>
            <i className="bi bi-pie-chart"><a>Charts</a></i>
            <i className="bi bi-star"><a>Icons</a></i><i className="fa-solid fa-chevron-down Down"></i>
            <i className="bi bi-bell"><a>Notifications</a></i><i className="fa-solid fa-chevron-down Down"></i>
            <i className="bi bi-calculator"><a>Widghts</a></i>
            <i onClick={tableShowHandler}><a>Trip Management</a></i>
            <p>EXTRAS</p>
            <i className="bi bi-star"><a>Pages</a></i><i className="fa-solid fa-chevron-down Down"></i>
            <i className="bi bi-file-earmark-text"><a>Docs</a></i>
        </div>
        <Table tableShowing={this.state.tripshow}></Table>
      </div>
    )
  }
}
export default ScroolBar;