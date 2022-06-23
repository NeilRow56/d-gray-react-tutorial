import React, {useState} from 'react'
import ClientOnly from '../components/ClientOnly'

export default function Home() {
  // const [hasMounted, setHasMounted] = useState(false);
  // React.useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }


const handleNameChange = () => {
  const names= ["Bob", "Kevin", "Dave"]
  const int = Math.floor(Math.random( ) * 3)
  return names[int]
}

  return (
    <div className='items-center justify-center w-full flex flex-col'>
      <ClientOnly>
      <h1 className="text-3xl font-bold">Hello {handleNameChange()}</h1>
      </ClientOnly>
     
    </div>
  )
}
