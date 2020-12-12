/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import './Order.style.scss'

const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 80, delay: 0.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(() =>
    setTimeout(() => {
      setShowModal(true)
    }, 5000),
  )

  return (
    <div className="order">
      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: '-100vw', transition: { ease: 'easeInOut' } }}
        className="thanks-container"
      >
        <h2>Thanks you for your order</h2>
      </motion.div>
      <motion.div
        variants={nextVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="base-container"
      >
        <p>Your ordered a {pizza.base} pizza with:</p>
      </motion.div>
      <motion.div
        variants={nextVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="toppings-container"
      >
        {pizza.toppings.map((toppings) => (
          <p key={toppings}>{toppings}</p>
        ))}
      </motion.div>
    </div>
  )
}

export default Order
