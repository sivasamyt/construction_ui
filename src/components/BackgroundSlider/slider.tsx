import React, { useEffect, useState } from 'react';
import './backgroundSlider.scss';
// import {ImageData} from './imageData';
import Img1 from '../../allImages/homePage.jpg';
import Img2 from '../../allImages/images/img1.jpg';
import Img3 from '../../allImages/images/img2.jpg';
import Img4 from '../../allImages/images/img3.jpg';
import Img5 from '../../allImages/images/img4.jpg';

const images=[
  Img1,
  Img2,
  Img3,
  Img4,
  Img5
];
const Slider:React.FC=()=> {

  const [currentImage, setCurrentImage] = useState(0);

  const imageStyle:any={

    // background-image: url('../../public/assets/images/homePage.jpg');
    // height: 100%,
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
}

export default Slider
