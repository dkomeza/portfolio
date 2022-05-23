import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Aboutme() {
    useEffect(() => {
        menuCheck();
    }, [])
    window.addEventListener('resize', menuCheck)
    function menuCheck(){
        let menuheight = document.getElementById('menu').clientHeight + "px"
        console.log(menuheight)
        document.getElementsByClassName('aboutme-content-container')[0].style.top = menuheight
    }

    return (
        <>
        <motion.div className="aboutme-content-container"
        animate={{
            scale: [0.75, 1.05, 1], 
            opacity: [0, 0.25, 0.5, 0.75, 1]
        }}
        transition={{duration: 0.3}}
        >
        <div className="aboutme-header">
            <h3>Hi, </h3><h2>my name is</h2> <h3>Dawid</h3>
        </div>
        <div className="aboutme-content">
            <div className="aboutme-text">
                <p>I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,</p>
                <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
            </div>
            <div className="aboutme-skills">
                <h2>My Skills: </h2>
                <div className="aboutme-skills-stars">
                    <div>
                        <div className="stars-item">
                            <p>HTML, CSS</p>
                            <div className="stars-count">
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar />
                            </div>
                        </div>
                            <div className="stars-item">
                                <p>JS</p>
                                <div className="stars-count">
                                    <FaStar className='checked' />
                                    <FaStar className='checked' />
                                    <FaStar className='checked' />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                    </div>
                    <div>
                        <div className="stars-item">
                            <p>Polish</p>
                            <div className="stars-count">
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked'/>
                            </div>
                        </div>
                        <div className="stars-item">
                            <p>English</p>
                            <div className="stars-count">
                            <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="stars-item">
                            <p>Microsoft Office</p>
                            <div className="stars-count">
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div className="stars-item">
                            <p>Adobe Photoshop</p>
                            <div className="stars-count">
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar className='checked' />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
        </>
    )
}

export default Aboutme