import React from 'react'

const Card = ({ img, title, text }) => {
    return (
        <>
            <div className="whyUsCard">
                <div className="whyUsImg">
                    {img}
                </div>
                <div className="whyUsTitle">
                    <p className='firstPara'>{title}</p>
                    <p className='secondPara'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Card