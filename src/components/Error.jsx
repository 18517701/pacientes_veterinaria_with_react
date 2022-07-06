import React from 'react'

const Error = ({children}) => {//children palabra reservada en react y hace referencia a todo lo q le pases a un componente y en lugar de colocar mensaje coloco children
  return (
    <div className = "bg-red-600 text-white p-3 uppercase font-bold mb-2 rounded">
                <p>{children}</p>
                
                
            </div>
  )
}

export default Error
