import React from 'react'
import { motion } from 'framer-motion'

import Button from '../Button/Button.component'

import './Home.style.scss'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

// eslint-disable-next-line react/prop-types
const Home = ({ setShowModal }) => {
  setShowModal(false)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Welcome"
    >
      <h2 className="hero-text">Welcome to Pizza Joint</h2>
      <Button routeDirection="base" buttonText="Create Your Pizza" />
    </motion.div>
  )
}

export default Home
