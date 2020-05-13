import React, { Component } from 'react'
import SideBar from './SideBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

class Logo extends Component {
    render() {
        return (
            <div className='navbar-brand'> 
                <SideBar />
                <img src={require('../Glamup_model_2.png')} alt='logo' className='style_img' />
            </div>
        )
    }
}
export default Logo