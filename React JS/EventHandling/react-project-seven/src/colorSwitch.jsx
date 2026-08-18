import React from 'react'

const colorSwitch = ({onChangeColor}) => {
  return (
    <button onClick={e =>{
        e.stopPropagation();
        onChangeColor();
    }}>
        change color
    </button>
  )
}

export default colorSwitch