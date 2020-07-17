import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../css/stockList.css'
const API_URL = 'http://localhost:3000/api';

class WomanStock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgCollection: [],
      isLoading: false
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    const url = `${API_URL}/allWomenStock`;
    axios.get(url)
      .then(res => {
        const images = res.data.data
        this.setState({
          imgCollection: images,
          isLoading: false

        });
      });
  }

  render() {
    const { imgCollection, isLoading } = this.state
    console.log(imgCollection)
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    
    return (
      <div className="Container-fluid row images col-xs-12">
        {imgCollection.map((imgCollection, i) => (
            <div className='img' key={i}>
              <div id='card'>
                {/* <Link to='/en/specifiedStock/?id='>  /en/specifiedStock/:id */}
                <Link to={{pathname:`/en/specifiedStock/${imgCollection._id}`}}>
                <img src={imgCollection.imgCollection[0]} data-id={imgCollection._id} className='imgPreview' alt="WomenStock" /><br />
                </Link>
                <span className='imgHeading'>{imgCollection.item_name}</span><br />
                <span> {imgCollection.price}</span>
              </div>
            </div>
          ))}
      </div>
    )
  }
}
export default WomanStock
