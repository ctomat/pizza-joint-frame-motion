import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Button from '../Button/Button.component'

import './Modal.style.scss'

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
}

// eslint-disable-next-line react/prop-types
const Modal = ({ showModal, setPizza }) => (
  <AnimatePresence exitBeforeEnter>
    {showModal && (
      <motion.div
        className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="modal" variants={modal}>
          <p>Want to make another Pizza?</p>
          <Button
            routeDirection=""
            buttonText="Order more pizzas"
            onClickFunction={() => setPizza({ base: '', toppings: [] })}
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default Modal
