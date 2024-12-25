import React, { useRef, useState } from 'react';

const App = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const cursorRef = useRef(null)
  const cursorHandler = (elem)=>{
    setX(elem.clientX);
    setY(elem.clientY);
    cursorRef.current.style.left = X + 'px';
    cursorRef.current.style.top = Y + 'px';
    cursorRef.current.style.transition = 'all ease 0.2s';    
   }
  
  return (
    <div onMouseMove={(elem)=>{
      cursorHandler(elem);
    }}  id='main' className='h-screen relative flex items-center justify-center w-full bg-black text-white font-[monument]'>
      <div ref={cursorRef} className='absolute h-[6vw] w-[6vw] bg-white mix-blend-difference rounded-full' id="cursor"></div>
      <h1 className='text-[10vw]'>FORMULA 1</h1>
    </div>
  );
}

export default App;
