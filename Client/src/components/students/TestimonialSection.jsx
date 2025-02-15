import React, { useContext } from 'react';
import { dummyTestimonial } from '../../assets/assets';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const {calculateRating} = useContext(AppContext) 

const TestimonialSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas animi corporis fugit quasi cupiditate. Quia!
      </p>

      <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='border p-5 rounded-lg shadow-md'>
            <div className='flex items-center gap-4'>
              <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full' />
              <div>
                <h3 className='text-lg font-semibold text-gray-800'>{testimonial.name}</h3>
                <p className='text-gray-600'>{testimonial.role}</p>
              </div>
            </div>

            <div className='mt-4'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < calculateRating(testimonial.rating) ? assets.star : assets.star_blank}
                    alt=''
                    className='w-4 h-4'
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
