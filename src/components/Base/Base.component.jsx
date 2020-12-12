import React from 'react'
import { motion } from 'framer-motion'

import OptionsList from '../OptionsList/OptionsList.component'
import Button from '../Button/Button.component'
import DisplayNone from '../DisplayNone/DisplayNone.component'

import './Base.style.scss'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, type: 'tween' },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

// eslint-disable-next-line react/prop-types
const Base = ({ base, setBase }) => {
  const options = ['Classic', 'Thin & Crispy', 'Thick Crust']
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base"
    >
      <div className="step1-text">
        <h3>Step 1: Choose Your Base</h3>
        <hr />
      </div>
      <OptionsList
        pizzaOptions={base}
        setIngredients={setBase}
        ingredients={options}
      />
      <DisplayNone ingredient={base}>
        <Button routeDirection="toppings" buttonText="Next" />
      </DisplayNone>
    </motion.div>
  )
}

export default Base
