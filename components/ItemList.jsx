import React from 'react'
import { FaTrashAlt} from 'react-icons/fa'

const ItemList = ({items, handlecheck, handleDelete }) => {
  return (
    
        <ul >
            {items.map((item) => (
                <li key={item.id} className='w-full flex items-center  bg-gray-200 border-b border-gray-400'>
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
                        aria-label={`Delete ${item.item}`}
                        
                        />

                </li>
            ))}
        </ul>

  )
}

export default ItemList