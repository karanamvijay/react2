import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../static/imag/111.jpeg'
import img2 from '../../static/imag/123.jpeg'
import img3 from '../../static/imag/111.jpeg'

export const Mycarousel:React.FC<{}>=()=>{
    return <>
       <Carousel>
      <Carousel.Item>
        <img width="100%" height="400px" src={img1}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>i'ts pure cotton shirt for only 500₹.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  src={img2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>i'ts pure cotton shirt for only 500₹.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  src={img3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          i'ts pure cotton shirt for only 500₹.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
}