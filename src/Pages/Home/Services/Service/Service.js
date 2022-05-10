import React from 'react';

const Service = ({ service }) => {
    const { title, img, description } = service
    return (
        <div>
            <div className="card mb-8 mx-auto w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;