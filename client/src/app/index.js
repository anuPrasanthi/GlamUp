import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/NavBar'
import ImageSlider from '../components/ImageSlider'
import {CreateStock} from '../admin'
import { WomanStock, MenStock, KidsStock, SpecifiedStock,SearchStock, Login, SignUp, ShoppingCart } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
              <Navbar />  
            <Switch>
                <Route exact path='/' component={ImageSlider} />
                <Route exact path='/create/stock' component={CreateStock} />
                <Route path='/woman-studio' component={WomanStock} />
                <Route path='/men-studio' component={MenStock} />
                <Route path='/kids-studio' component={KidsStock} /> 
                <Route path='/en/specifiedStock/:id' component={SpecifiedStock} />
                <Route path='/en/search' component={SearchStock} />
                <Route path='/en/logon' component={Login} />
                <Route path='/en/signup' component={SignUp} />
                <Route path='/en/shop/cart' component={ShoppingCart}/>

            </Switch>
        </Router>
        
    )
}

export default App