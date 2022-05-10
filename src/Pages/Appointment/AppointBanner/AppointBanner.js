import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointBanner = ({selected, setSelected}) => {
  
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col-reverse  lg:flex-row">
                   <div className='shadow-xl m-12 rounded-lg '>
                   <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                   
                    />
                   </div>
                    <div>
                        <img alt='' width={594} height={355} src={chair} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;