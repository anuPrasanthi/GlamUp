import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/NavBar'
import ImageSlider from '../components/ImageSlider'
import {CreateStock} from '../admin'
import { WomanStock, MenStock } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path='/' component={ImageSlider} />
                <Route path='/create/stock' component={CreateStock} />
                <Route path='/in/woman' component={WomanStock} />
                <Route path='/in/man' component={MenStock} />
            </Switch>
        </Router>
    )
}

export default App