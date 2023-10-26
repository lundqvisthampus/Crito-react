import React from 'react'

const ButtonDots = ({type}) => {

    const getClassName = () => {

        if (type === 'dark') {
            return 'buttonDotsDark'
        } else {
            return 'buttonDotsLight'
        }
    };

  return (
    <button type="button" className={getClassName()}></button>
  )
}

export default ButtonDots