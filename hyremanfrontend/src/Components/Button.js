import React from 'react'

const Button = ({title, icon, style, className, fill}) => {
    return (
        <div>
            <button className={className} style={style}>{icon}{title} {icon.fill}</button>
        </div>
    )
}

export default Button