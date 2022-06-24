import React, { useState } from 'react'
import { FaTrashAlt} from 'react-icons/fa'
import Layout from './Layout'

const Content = () => {
    const [ items, setItems ] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "item 3"
        },
    ])
    
    const handleCheck= (id) =>   {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    const handleDelete = ( id ) => {
        const listItems = items.filter((item)  => item.id !== id )
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }
    
     
  return (
    <Layout>
    <main className='flex flex-col w-full items-center justify-center'>
        {items.length ? (
        <ul >
            {items.map((item) => (
                <li key={item.id} className='w-full flex items-center justify-center bg-gray-200 border-b border-gray-400'>
                    <input
                    className='mx-2 w-8 h-8 '
                     type="checkbox"
                     onChange={() => handleCheck(item.id)}
                     checked={item.checked}
                     />
                     <label
                     style={(item.checked) ? {textDecoration: 'line-through'} : null }
                     onDoubleClick={() => handleCheck(item.id)}
                     className='grow h-20 pt-8 pl-2'
                     htmlFor="">{item.item}</label>
                     
                     < FaTrashAlt
                     className='ml-3 text-blue-500 w-20 h-10 hover:text-red-500'
                        onClick={() => handleDelete(item.id)}
                        role="button"
                        tabIndex="0" 
                        
                        />

                </li>
            ))}
        </ul>
        ) : (
            <p className='mt-2 text-3xl font-bold'>Your List is empty</p>
        )}
        
    </main>
    </Layout>
  )
}

export default Content