
import React, { Component } from 'react'
import axios from 'axios'
import '../css/stockList.css'
const API_URL = 'http://localhost:3000/api';

class MenStock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgCollection: [],
      isLoading: false
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    const url = `${API_URL}/allMenStock`;
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
    //console.log(imgCollection)
    return (
      <div className="Container-fluid row images col-xs-12">
        {imgCollection.map((imgCollection, i) => {
          return (
            <div className='img' key={i}>
              <div id='card'>
                <img src={imgCollection.imgCollection} className='imgPreview' alt="WomenStock" /><br />
                <span className='imgHeading'>{imgCollection.item_name}</span><br />
                <span> {imgCollection.price}</span>
              </div>
            </div>
          )
        })}
      </div>
    )

  }
}
export default MenStock
