import React from 'react'
import { motion } from 'framer-motion'

import './OptionsList.style.scss'

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

const hoverVariants = {
  hover: {
    scale: 1.3,
    color: 'purple',
    transition: { type: 'spring', stiffness: 300 },
  },
}

// eslint-disable-next-line react/prop-types
const OptionsList = ({ pizzaOptions, setIngredients, ingredients }) => {
  const options = ingredients
  const isActive = (option) => {
    // eslint-disable-next-line react/prop-types
    if (pizzaOptions.includes(option)) {
      return 'selected'
    }
    return ''
  }
  return (
    <motion.div
      variants={nextVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="options"
    >
      <div className="options-container">
        {options.map((option) => (
          <motion.button
            variants={hoverVariants}
            whileHover="hover"
            key={option}
            type="submit"
            onClick={() => {
              setIngredients(option)
            }}
            className={`ingredients-option-container ${isActive(option)}`}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default OptionsList
