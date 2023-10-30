import React from 'react'

function Button({onClick, msj}) {
  return (
    <button className='cursor-pointer transition-all bg-blue-500 text-white px-5 py-2 rounded-lg
    border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[1px] active:brightness-90 active:translate-y-[2px] block' onClick={onClick}>{msj}</button>
  )
}

export default Button