import React from 'react'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
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
const ViewButton = styled.a.attrs({
  className: `btn btn-default`,
})`
border:1px solid black;
margin: 15px 15px 15px 5px;
`

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
                <ViewButton href={'/woman-studio'}>View</ViewButton>
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
              <ViewButton href={'/men-studio'}>View</ViewButton>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
              <span className='child'><h1>NEW IN BABY</h1>
                <div className='sub-title'>Discover the latest essentials collection for baby with spring colors and new shapes.
              </div>
              <ViewButton href={'/in/woman'}>View</ViewButton>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}
export default ImageSlider