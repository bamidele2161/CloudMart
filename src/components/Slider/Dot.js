import React from 'react'

const Dot = ({activeIndex, onclick, imageslider}) => {
    return (
        <div className='all-dots'>
            {
                imageslider.map((slide, index) => (
                    <span key={index} className={`${activeIndex === index ? "dot active-dot": "dot"}`}
                    onclick={() => onclick(index)}></span>
                ))
            }
        </div>
    )
}

export default Dot
