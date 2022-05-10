import React from 'react';

const InfoCard = ({ img, title, bgClass }) => {

    return (
        <div className={`card text-white lg:card-side bg-base-100 m-5  shadow-xl ${bgClass}`}>
            <figure className='ml-5 mt-2'><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;