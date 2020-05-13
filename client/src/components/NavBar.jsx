import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Links from './Links'

// const Container = styled.div.attrs({
//     className: 'container',
// })``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg topnav',
})`
    z-index: 2;
    position: absolute;
`

class NavBar extends Component {
    render() {
        return (
            <Container-fluid>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container-fluid>

        )
    }
}
export default NavBar