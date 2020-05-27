import React from 'react'
import Sidebar from "react-sidebar";
import '../css/sideBar.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen = (sidebarOpen) => {
        // if(sidebarOpen!=true){
        //     this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
        // }else{
        //     this.setState({
        //         sidebarOpen: false
        //     })
        // }
        this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
    }
    render() {
        return (
            <Sidebar className='close'
                sidebar={
                    <b>
                        <ul className='sideBarList'>
                            <li><a href={'in/woman-studio'}>WOMAN</a></li>
                            <li>MAN</li>
                            <li>KIDS</li>
                            <li className='sideBarInfo'><a href='#'>+ INFO</a>
                            <ul><li>Create</li>
                            <li>Create</li>
                            <li>Create</li>
                            </ul>
                            </li>
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