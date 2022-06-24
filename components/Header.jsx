import React from 'react'

const Header = ({title}) => {
  return (
    <header className='text-3xl font-bold text-white bg-blue-600 w-screen text-center'>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header
