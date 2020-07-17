import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../css/style.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'


const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``
const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Collapse>
                    <List>
                        <Item>
                            <Link to='/en/search' className='navbar-brand navSearcgStyle'>SEARCH<span className='search-box'>   ___________</span></Link>
                        </Item>
                    </List>
                </Collapse>
                <ul>
                    <li><Link to='/en/logon' className='navbar-brand navLOginStyle'>LOG IN</Link></li>
        <li><Link to='/en/shop/cart' className='navbar-brand fa fa-shopping-cart'></Link></li>
                </ul>
            </React.Fragment>
        )
    }
}
export default Links