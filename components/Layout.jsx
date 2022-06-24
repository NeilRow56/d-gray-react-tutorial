import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children, title='React Tutorial'}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content="React Tutorial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className='flex flex-col h-screen w-full'>
        <Header />
     
      <div className=" flex flex-grow">
        {children}
      </div>
        <Footer />
        </div>
    </>
  )
}

export default Layout