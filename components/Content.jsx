import React from 'react'

import ItemList from './ItemList'
import Layout from './Layout'

const Content = ({items, handleCheck, handleDelete }) => {
    
return (
    <Layout >
    <main className='flex flex-col w-full items-center mt-10'>
        {items.length ? (
        <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
        ) : (
            <p className='mt-2 text-3xl font-bold'>Your List is empty</p>
        )}
        
    </main>
    </Layout>
  )
}

export default Content