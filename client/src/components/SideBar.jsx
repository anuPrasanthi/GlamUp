import React from 'react'
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';
import '../css/sideBar.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            visibility: false
        };
    }

    onSetSidebarOpen = (sidebarOpen) => {
        this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
    }
    visibilityToggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        const { visibility } = this.state
        return (
            <Sidebar className='close'
                sidebar={
                    <b>
                        <ul className='sideBarList'>
                            <li><Link to='/woman-studio'>WOMAN</Link></li>
                            <li><Link to='/men-studio'>MAN</Link></li>
                            <li><Link to='/kids-studio'>KIDS</Link></li>
                            <li className='sideBarInfo'><span onClick={this.visibilityToggle}>
                                {visibility ? "- INFO" : "+ INFO"}
                            </span>

                            </li>
                            {
                                visibility && (
                                    <ul className='infoList'>
                                        <li><Link to='/'>CREATE</Link></li>
                                        <li><Link to='/create/stock'>CREATE</Link></li>
                                        
                                    </ul>
                                )}
                        </ul>

                    </b>

                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{
                    sidebar: {
                        background: "white", height: '100%',
                        width: '316px', position: 'fixed',
                        top: 0,
                        left: 0,
                        transition: 'left .7s',
                        padding: '100px 141px 0px 0px',
                        fontSize: "40px",
                        overflow: "hidden",
                    }
                }}
            >
                <i className="fa fa-bars" onMouseEnter={this.onSetSidebarOpen}></i>
            </Sidebar>
        )
    }
}
export default SideBar