import React from 'react';

const TransparentButton = ({title}) => {
    return (
        <div>
            <button className='bg-transparent text-white border-0 py-2'>{title}</button>
        </div>
    );
};

export default TransparentButton;