import React from 'react'
import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
const DisplayNone = ({ ingredient, children }) => {
  // eslint-disable-next-line react/prop-types
  if (ingredient.length !== 0) {
    return (
      <motion.div
        transition={{ type: 'spring', stiffness: 80 }}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    )
  }
  return <span></span>
}

export default DisplayNone
