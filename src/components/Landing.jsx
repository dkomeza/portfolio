import React from 'react'
import { motion } from 'framer-motion'
import LandingBackground from './LandingBackground'

function Landing() {
  return (
    <motion.div 
      className="hero"
      animate={{
        scale: [0.75, 1.05, 1], 
        opacity: [0, 0.25, 0.5, 0.75, 1]
      }}
      transition={{duration: 0.3}}
    >
      <div className="hero-text">
        <h1>Dawid Komęza</h1>
        <div className="hero-caption">
            <h2>Junior </h2><span className="hero-accent">Front-end</span><h2> Developer</h2>
        </div>
      </div>
    </motion.div>
  )
}

export default Landing