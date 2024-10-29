'use client'

import Slider from "react-slick";

// style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderComponents.scss'

//image
import zoomer from '@/images/zoomer.svg'
import hellen from '@/images/hellen.svg'
import shell from '@/images/shell.svg'
import hellena from '@/images/hellena.svg'
import artvenue from '@/images/artvenue.svg'
import david from '@/images/david.svg'
import waves from '@/images/waves.svg'
import charolette from '@/images/charolette.svg'
import SliderCard from "../sliderCard";


interface Slides {
  icon: string,
  title: string,
  text: string,
  img: string,
  name: string,
  role: string
}

export default function SliderComponents() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    centerMode: true,
    variableWidth: true,    
  };
  const slides: Slides[] = [
    {
      icon: zoomer,
      title: 'Zoomerr',
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      img: hellen,
      name: 'Hellen Jummy',
      role: 'Team Lead'
    },
    {
      icon: shell,
      title: 'SHELLS',
      text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
      img: hellena,
      name: 'Hellena John',
      role: 'Co-founder'
    },
    {
      icon: artvenue,
      title: 'ArtVenue',
      text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
      img: david,
      name: 'David Oshodi',
      role: 'Manager'
    },
    {
      icon: waves,
      title: 'WAVES',
      text: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
      img: charolette,
      name: 'Charolette Hanlin',
      role: 'CEO'
    },
    {
      icon: artvenue,
      title: 'ArtVenue',
      text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
      img: david,
      name: 'David Oshodi',
      role: 'Manager'
    },
  ];

  return (
    <div className="sliderComponents">
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => {
            return (
              <SliderCard data={slide} key={index}/>
            )
          })}
        </Slider>
      </div>
    </div>
  );
}
