import React, { useRef, useState } from 'react';

const App = () => {

  const [on, seton] = useState(false);
  
  const bulbRef = useRef(null);
  const buttonRef = useRef(null);

  const clickHandler = () => {
    seton(!on);
    if(on === true) {
    bulbRef.current.style.backgroundColor = 'yellow'
    bulbRef.current.style.boxShadow = '10px 10px 100px yellow'
    buttonRef.current.innerHTML = 'Turn off'
  }else{
    bulbRef.current.style.backgroundColor = 'white'
    bulbRef.current.style.boxShadow = 'none'
    buttonRef.current.innerHTML = 'Turn on'
  }
}
  return (
    <div className='bg-black h-screen flex items-center justify-center gap-36'>
      <h1 className='font-[monument] text-yellow-400 text-6xl'>Bulb</h1>
      <div id='bulb' ref={bulbRef} className='h-[20vw] w-[20vw] rounded-full bg-white transition-epic'></div>
      <button onClick={clickHandler} ref={buttonRef} class="button-50" role="button">Turn on</button>
    </div>
  );
}

export default App;
