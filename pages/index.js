import React, {useState} from 'react'
import ClientOnly from '../components/ClientOnly'
import Content from '../components/Content'



export default function Home() {
  // const [hasMounted, setHasMounted] = useState(false);
  // React.useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }
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
    
    <div className=' flex w-full'>
      
      
      <ClientOnly>
        <Content
          items = {items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          
        />
      </ClientOnly>
      
      
     
    </div>
    
  )
}
