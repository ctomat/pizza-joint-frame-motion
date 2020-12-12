import React from 'react'
import PropTypes from 'prop-types'
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom'

import './Button.style.scss'

const Button = ({ routeDirection, buttonText, onClickFunction }) => (
  <Tilt className="Tilt" options={{ max: 45 }}>
    <Link to={routeDirection}>
      <button
        type="button"
        className="create-pizza-button"
        onClick={onClickFunction}
      >
        {buttonText}
      </button>
    </Link>
  </Tilt>
)
Button.propTypes = {
  routeDirection: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func,
}

export default Button
