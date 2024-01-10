'use client'
import Image from 'next/image'
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'

export default function ResearchPage() {
  return (
    <>
    
    <div className='mainPage'>
      <Navbar />
      
      <div className='researchPage'>
        <p> Research In progress</p>
      </div>

    </div>
    <Footer />

    </>
  );
};



{/* <p> Here's some of my Research.  </p>


<p> In progress </p> */}

{/* 

<Image
  src="/images/photo.jpg"
  alt="Photo"
  width={1125}
  height={750}
  priority
  className="next-image"
/>
[Unsplash ↗ ](https://unsplash.com/photos/ndN00KmbJ1c) 
*/}
