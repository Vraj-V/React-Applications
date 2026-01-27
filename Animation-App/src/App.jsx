import React from 'react'
import { motion } from "framer-motion";
// import { motion } from "motion/react"
import Svg from './Component/React.jsx';

const App = () => {

  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}

  return (
    <div>
 <h1>This are Animation</h1>

        <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: 300,
          height: 100,
          background: "red"
        }}
      />
      <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  bounce: 0.5
            },
            }}
            style={ball}
            whileTap = {{ scale: 0.9 }}
            whileHover = {{ scale: 1.2 }}
            
        />

              <Svg />

    </div>
  )
}

export default App