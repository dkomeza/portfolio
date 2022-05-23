import React from 'react'

function LandingBackground() {
    var w = window.innerWidth
    var h = window.innerHeight
    return (
        <canvas width={w} height={h} id='landingbackground' className='landingbackground'></canvas>
    )
}

export default LandingBackground