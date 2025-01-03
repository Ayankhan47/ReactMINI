import React, { useRef, useState } from 'react';

const App = () => {
  const growthRef = useRef(null)
  const [percent, setpercent] = useState(0);
  const [isDownloading, setisDownloading] = useState(false);
  const buttonRef = useRef(null)
  
  
  const handleDownload = () => {
    setisDownloading(true)
    if(isDownloading === true){
    }
    const downloadinterval = setInterval(() => {
      setpercent((prev)=>{
        const newper = prev + 1
        growthRef.current.style.width = `${newper}%`
        if(newper >= 100 ){
          clearInterval(downloadinterval)
          setisDownloading(false)
          buttonRef.current.innerHTML = 'Downloaded'
          buttonRef.current.style.backgroundColor = '#006200'
        }
        return newper
      })
    }, 60);
    buttonRef.current.innerHTML = 'Downloading...'
  }
  return (
    <div id='main' className='h-screen w-full bg-zinc-900 flex items-center justify-center'>
    <div id="card" className='h-[30vw] w-[50vw] bg-white rounded-xl flex flex-col items-center justify-center gap-4'>
      <h1 className='font-[monument] text-3xl'>Download</h1>
      <div id="file" className='flex items-center gap-4'>
        <img className='h-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='react' />
      <h3 className='text-lg font-semibold'>React.JS</h3>
      <h5 className='text-gray-500'>File Size : 1.2GB</h5>
      </div>
      <div id="download" className='mt-20 mb-10 w-[90%]'>
      <h1 className='text-end mr-4 font-[monument] text-3xl font-semibold'>{percent}%</h1>
      <div id="downloadbar" className='h-[2vw] w-full rounded-2xl bg-gray-400 overflow-hidden'>
        <div ref={growthRef} id="growth" className='h-full w-[0%] bg-green-600 '>

        </div>
      </div>
      </div>
      <button ref={buttonRef} onClick={handleDownload} className='py-3 text-white px-6 font-[gilroy] text-xl font-semibold rounded-xl bg-green-500'>Download</button>
    </div>
  </div>
  );
}

export default App;
