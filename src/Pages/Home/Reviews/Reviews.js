import React from 'react';

const Reviews = ({ review }) => {
    const { name, img, location } = review;
    return (
        <div class="card w-96 mx-auto mb-12 shadow-xl">
            <div class="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className='flex items-center w-3/4 mx-auto mb-6'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                        <img alt='' src={img} />
                    </div>
                </div>
                <div className='ml-6'>
                    <p>{name}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;