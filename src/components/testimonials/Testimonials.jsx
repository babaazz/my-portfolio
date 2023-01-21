import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const testimonialContent = [
    {
      avatar: AVT1,
      name: "Tadka Kumari",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nihil repellat praesentium voluptatibus deserunt quaerat eius et. Doloremque labore nam, tempore, laudantium commodi pariatur expedita nemo et, veritatis amet libero.",
    },
    {
      avatar: AVT2,
      name: "Mareech Singh",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nihil repellat praesentium voluptatibus deserunt quaerat eius et. Doloremque labore nam, tempore, laudantium commodi pariatur expedita nemo et, veritatis amet libero.",
    },
    {
      avatar: AVT3,
      name: "Dhushan Chand",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nihil repellat praesentium voluptatibus deserunt quaerat eius et. Doloremque labore nam, tempore, laudantium commodi pariatur expedita nemo et, veritatis amet libero.",
    },
    {
      avatar: AVT4,
      name: "Shoorpan Khan",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nihil repellat praesentium voluptatibus deserunt quaerat eius et. Doloremque labore nam, tempore, laudantium commodi pariatur expedita nemo et, veritatis amet libero.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials-container mySwiper"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={40}
      >
        {testimonialContent.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
