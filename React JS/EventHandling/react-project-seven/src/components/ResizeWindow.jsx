import React, { useEffect, useState } from 'react'

const ResizeWindow = () => {
    const [windowWidth,setwindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = ()=> setwindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize)
        
        return () => {
        window.removeEventListener('resize',handleResize)
      };
    }, []);
    
  return (
    <div>
        <h1>Window width : {windowWidth}</h1>
    </div>
  );
}

export default ResizeWindow