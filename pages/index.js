import React, {useState} from 'react'
import ClientOnly from '../components/ClientOnly'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Home() {
  // const [hasMounted, setHasMounted] = useState(false);
  // React.useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }



  return (
    <div className='items-center justify-center w-full flex flex-col'>
      
      
      <ClientOnly>
        <Content />
      </ClientOnly>
      
      
     
    </div>
  )
}
