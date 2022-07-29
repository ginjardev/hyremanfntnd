import React from 'react'

const Button = ({title, icon, style, className}) => {
    return (
        <div>
            <button className={className} style={style}>{icon}{title}</button>
        </div>
    )
}

export default Button