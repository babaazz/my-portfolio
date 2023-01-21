import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="testimonial">
      <div className="client-avatar">
        <img src={testimonial.avatar} alt={testimonial.name} />
      </div>
      <h5 className="client-name">{testimonial.name}</h5>
      <small className="client-review">{testimonial.review}</small>
    </article>
  );
};

export default TestimonialCard;
