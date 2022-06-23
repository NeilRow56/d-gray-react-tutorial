import React from 'react'
import Layout from './Layout'

const Content = () => {

    const handleNameChange = () => {
        const names= ["Bob", "Kevin", "Dave"]
        const int = Math.floor(Math.random( ) * 3)
        return names[int]
      }
      
  return (
    <Layout>
    <main className='flex flex-col w-full items-center justify-center'>
        <p>Hello {handleNameChange()}</p>
    </main>
    </Layout>
  )
}

export default Content