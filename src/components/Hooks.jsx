import React from 'react'
import { useState, useEffect } from 'react'

export const Hooks = () => {

  //ejemplo 2
  const [count, setCount] = useState(0);

  useEffect( ()=> {
    document.title = `has hecho click ${count} veces`;
  }, [count] ); // que se ejecute una sola vez para que no se ejecute constantemente y consuma recursos

  //ejemplo 1
  const [color, setColor] = useState('red')

  const fondo = {
    backgroundColor: color,
    width: '100%',
    height: 'auto'
  }

  const handleColorChange = () =>{
    if (color === 'red'){
      setColor('yellow')
    }
    else{
      setColor('red')
    }
  }

  
  return (
    <div style={fondo}>
      <button onClick={handleColorChange}> Cambiar fondo </button>



      <p> Has hecho click {count} veces </p>
      <button onClick={()=> setCount(count+1)}> Hazme Click! </button>
    </div>
  )
}
