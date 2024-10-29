'use client'

import Slider from "react-slick";
import Image from 'next/image';

// style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderComponents.scss'

// images
import zoomer from '@/images/zoomer.svg';
import hellen from '@/images/hellen.svg';
import shell from '@/images/shell.svg';
import hellena from '@/images/hellena.svg';
import artvenue from '@/images/artvenue.svg';
import david from '@/images/david.svg';
import waves from '@/images/waves.svg';
import charolette from '@/images/charolette.svg';
import SliderCard from "../sliderCard";

interface Slides {
  icon: string,
  title: string,
  text: string,
  img: string,
  name: string,
  role: string
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button className="customArrow nextArrow" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12ZM18.5 12L12.5 18L18.5 12Z" fill="#78350F" />
        <path d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button className="customArrow prevArrow" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M18.5 12H6H18.5ZM6 12L12 6L6 12ZM6 12L12 18L6 12Z" fill="#78350F" />
        <path d="M6 12L12 18M18.5 12H6H18.5ZM6 12L12 6L6 12Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  );
}

export default function SliderComponents() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
      <div className="container-fluid">
        <div className="title d-flex justify-content-between align-items-center container-fluid">
          <h2 className="mb-0">Because they love us</h2>
        </div>
      </div>
      <div className="slider-container">
        <div className="sliderBg"></div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <SliderCard data={slide} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
