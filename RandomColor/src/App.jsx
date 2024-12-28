import React, { useRef, useState } from 'react';

const App = () => {

  const [value1, setvalue1] = useState(0);
  const [value2, setvalue2] = useState(0);
  const [value3, setvalue3] = useState(0);

  
  
  const bulbRef = useRef(null);
  const buttonRef = useRef(null);
  const H1Ref = useRef(null);

  const clickHandler = () => {
    setvalue1(Math.floor(Math.random() * 256));
    setvalue2(Math.floor(Math.random() * 256));
    setvalue3(Math.floor(Math.random() * 256));
    bulbRef.current.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
    buttonRef.current.innerHTML = 'rgb(' + value1 + ',' + value2 + ',' + value3 + ')';
    bulbRef.current.style.boxShadow = `5px 5px 20px rgba(${value1}, ${value2}, ${value3})`;
    H1Ref.current.style.color = `rgb(${255 - value1}, ${255 - value2}, ${255 - value3})`;
  
}
  return (
    <div className='bg-black h-screen flex items-center justify-center gap-36'>
      <h1 ref={H1Ref} className='font-[monument] text-yellow-400 text-6xl'>Color</h1>
      <div id='bulb' ref={bulbRef} className='h-[20vw] w-[20vw] rounded-full bg-white transition-epic'></div>
      <button onClick={clickHandler} ref={buttonRef} className='py-3 px-6 rounded-xl active:scale-[0.97] bg-white shadow-sm shadow-white' role="button">CLick</button>
    </div>
  );
}

export default App;
