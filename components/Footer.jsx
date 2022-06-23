import React from 'react'

const Footer = () => {
const today = new Date()

  return (
    <footer className='bg-blue-600 text-white text-center'>Copyright &copy; {today.getFullYear()}</footer>
  )
}

export default Footer