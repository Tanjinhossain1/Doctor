import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div>
            <div className="hero min-h-screen w-3/4 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-12'>
                    
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>  
                        <p className="my-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button class="btn btn-primary text-white text-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;