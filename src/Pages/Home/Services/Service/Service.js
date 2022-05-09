import React from 'react';

const Service = ({ service }) => {
    const { title, img, description } = service
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
               <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album"/>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;