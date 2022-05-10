import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Reviews from '../Reviews/Reviews';

const Testimonials = () => {
    const reviews = [
        {id:1,name:'Winson Herry', img: people, reviews: '', location: 'California'},
        {id:2,name:'Winson Herry', img: people2, reviews: '', location: 'California'},
        {id:3,name:'Winson Herry', img: people3, reviews: '', location: 'California'},
    ]
    return (
        <section>
            <div className='flex items-center my-28 justify-between mx-12'>
                <div>
                    <h1 className='font-bold text-secondary'>Testimonial</h1>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='' width={192} height={168} src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
          {
              reviews.map((review)=> <Reviews review={review} key={review.id}></Reviews>)
          }
            </div>
        </section>
    );
};

export default Testimonials;