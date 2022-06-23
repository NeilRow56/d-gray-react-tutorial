import React from 'react'
import Layout from './Layout'

const Content = () => {

    const handleNameChange = () => {
        const names= ["Bob", "Kevin", "Dave"]
        const int = Math.floor(Math.random( ) * 3)
        return names[int]
      }

    const handleClick= () => {
        console.log('You clicked it')
    }

    const handleClick2= (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClick3= (e) => {
        console.log(e.target.innerText)
    }
      
  return (
    <Layout>
    <main className='flex flex-col w-full items-center justify-center'>
        <p
        onDoubleClick={handleClick}
        >Hello {handleNameChange()}</p>
        <button
        className='primary-button mb-4'
        onClick={handleClick}
        >Click It</button>
        <button
        className='primary-button mb-4'
        onClick={() => handleClick2('Dave')}
        >Click It</button>
        <button
        className='primary-button'
        onClick={(e) => handleClick3(e)}
        >Click It</button>
    </main>
    </Layout>
  )
}

export default Content