import React from 'react';

const RoundedButton = ({title, icon, style, className}) => {
    return (
        <div>
            <button className={className} type="button" style={style}>
            {title}{icon}
            </button>
        </div>
    );
};

export default RoundedButton;