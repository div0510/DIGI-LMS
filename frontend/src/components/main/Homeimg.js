import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
       style={{width: 120}}
        className='w-100  d-block h-100 img-fluid'
        itemId={1}
        src='https://elearningfeeds.com/wp-content/uploads/2021/08/image_641854_1628993736.png'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://nextbridge.com/wp-content/uploads/2022/03/MERN-falls-under-the-best-tech-stacks-of-FinTech-for-17-reasons-768x432.png'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://webnotics.solutions/wp-content/uploads/2021/10/Python-Programming.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}