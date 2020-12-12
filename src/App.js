import React, { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header/Header.component'
import Home from './components/Home/Home.component'
import Base from './components/Base/Base.component'
import Toppings from './components/Toppings/Toppings.component'
import Order from './components/Order/Order.component'
import Modal from './components/Modal/Modal.component'

const App = () => {
  const [pizza, setPizza] = useState({ base: '', toppings: [] })
  const location = useLocation()
  const [showModal, setShowModal] = useState(false)

  const setBase = (base) => {
    if (pizza.base === base) {
      setPizza({ ...pizza, base: '' })
    } else {
      setPizza({ ...pizza, base })
    }
  }

  const setToppings = (toppings) => {
    let newTopping
    if (!pizza.toppings.includes(toppings)) {
      newTopping = [...pizza.toppings, toppings]
    } else {
      newTopping = pizza.toppings.filter((items) => items !== toppings)
    }
    setPizza({ ...pizza, toppings: newTopping })
  }

  return (
    <div className="app">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setPizza={setPizza}
      />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base base={pizza.base} setBase={setBase} />
          </Route>
          <Route path="/toppings">
            <Toppings
              base={pizza.base}
              toppingsSelected={pizza.toppings}
              setToppings={setToppings}
            />
          </Route>
          <Route path="/order">
            <Order
              pizza={pizza}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </Route>
          <Route path="/">
            <Home setShowModal={setShowModal} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
