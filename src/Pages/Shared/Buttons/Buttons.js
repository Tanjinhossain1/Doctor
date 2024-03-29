import React from 'react';

const Buttons = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary text-white text-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default Buttons;