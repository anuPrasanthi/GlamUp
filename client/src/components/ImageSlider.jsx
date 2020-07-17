import React from 'react'
import { Slide } from 'react-slideshow-image'
import NavBar from '../components/NavBar'
import {Link} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../css/style.css'

const slideImages = [
  require('../images/img_1.jpg'),
  require('../images/img_5.jpg'),
  require('../images/img_4.jpg')
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  // indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
class ImageSlider extends React.Component {
  render() {
    return (
      <div className="slide-container">
        <NavBar />
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
              <span className='woman'><h1>NEW IN</h1>
                <div className='sub-title'>Explore this week's latest womenswear pieces of the season curated for you.<br />
                Spring Summer Woman Collection.
              </div>
                {/* <button className='btn btn-default' onClick={() => history.push('/in/woman')}>View</button> */}
                {/* <Link to='/in/woman'>View</Link> */}
                <Link className= 'btn btn-default links' to='/woman-studio'>View</Link>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
              <span className='men'><h1>NEW IN</h1>
                <div className='sub-title'>Explore week’s latest menswear pieces of the <br />
                season curated for you.<br />
                Spring Summer Man Collection
              </div>
              <Link className= 'btn btn-default links' to='/men-studio'>View</Link>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
              <span className='child'><h1>NEW IN BABY</h1>
                <div className='sub-title'>Discover the latest essentials collection for baby with spring colors and new shapes.
              </div>
              <Link className= 'btn btn-default links' to='/men-studio'>View</Link>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}
export default ImageSlider