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
    
    <div className=' flex w-full'>
      
      
      <ClientOnly>
        <Content />
      </ClientOnly>
      
      
     
    </div>
    
  )
}
