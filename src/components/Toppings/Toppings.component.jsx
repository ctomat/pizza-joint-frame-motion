import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'

import OptionsList from '../OptionsList/OptionsList.component'
import DisplayNone from '../DisplayNone/DisplayNone.component'
import Button from '../Button/Button.component'
import './Toppings.style.scss'

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

const Toppings = ({ base, toppingsSelected, setToppings }) => {
  const toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ]

  if (base.length === 0) {
    return <Redirect to="/" />
  }

  return (
    <div className="toppings">
      <div className="step2-text">
        <motion.h3
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Step 2: Choose Your Toppings
        </motion.h3>
        <motion.hr
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </div>
      <OptionsList
        pizzaOptions={toppingsSelected}
        setIngredients={setToppings}
        ingredients={toppings}
      />
      <DisplayNone ingredient={toppingsSelected}>
        <Button routeDirection="order" buttonText="Next" />
      </DisplayNone>
    </div>
  )
}
Toppings.propTypes = {
  base: PropTypes.string.isRequired,
  toppingsSelected: PropTypes.array.isRequired,
  setToppings: PropTypes.func.isRequired,
}

export default Toppings
