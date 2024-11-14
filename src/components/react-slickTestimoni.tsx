"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Airin',
    feedback: 'Excellent service and support',
    position: 'Operational of Pertamina International Shipping',
    imageSrc: '/forTestimoni/airin.jpg',
  },
  {
    name: 'Yanuar',
    feedback: 'Highly recommended The team was amazing.',
    position: 'Procurement of Samudera Indonesia',
    imageSrc: '/forTestimoni/prosamudera.jpg',
  },
  {
    name: 'Wahyu',
    feedback: 'Very reliable and professional.',
    position: 'SPV Procurement of Medco Energi Indonesia',
    imageSrc: '/forTestimoni/promedco.jpg',
  },
];

export default function CustomerTestimoni() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="max-w-[90vw] md:max-w-[50vw] mx-auto p-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-100 dark:text-neutral-200 mb-10">
        What Are They Say
      </h2>
  <Slider {...settings}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="px-4 flex justify-center">
        <div className="bg-white flex flex-col md:flex-row items-center md:justify-between p-6 rounded-lg shadow-lg text-center h-auto">
          <img
            src={testimonial.imageSrc}
            alt={testimonial.name}
            className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-lg mb-4 md:mb-0 object-cover"
          />
          <div className="flex flex-col text-center md:text-left justify-center md:ml-6">
            <h4 className="text-[35px] font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-lg text-rose-800 ">{testimonial.position}</p>
            <p className="text-gray-700 italic mt-2"> &quot;{testimonial.feedback}&quot;</p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
  );
}
