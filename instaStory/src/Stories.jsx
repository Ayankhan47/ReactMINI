import React, { useRef, useState } from "react";

const Stories = () => {
  const storyRef = useRef(null);
  const growthRef = useRef(null);
  const dpRef = useRef(null);
  const usernameRef = useRef(null);
  const [time, settime] = useState(0);
  const [localStory_data, setlocalStory_data] = useState(
    JSON.parse(localStorage.getItem("storydata"))
  );

  const storyHandler = (elem) => {
    storyRef.current.style.backgroundImage = `url(${elem.story})`;
    storyRef.current.style.display = "block";
    dpRef.current.style.backgroundImage = `url(${elem.dp})`;
    usernameRef.current.innerHTML = elem.username;
    var storyInterval = setInterval(function () {
      settime((prevTime) => {
        const newTime = prevTime + 1;
        growthRef.current.style.width = `${newTime}%`;
        return newTime;
      });
    }, 60);
    setTimeout(function () {
      settime(0);
      clearInterval(storyInterval);
      storyRef.current.style.display = "none";
    }, 6000);
  };
  return (
    <>
      <div className="h-[12vh] w-full border-b border-b-gray-700 pt-[2vh] pl-[1vh] overflow-y-auto bg-black whitespace-nowrap scrollbar-none">
        {localStory_data.map(function (elem, id) {
          return (
            <div
              key={id}
              onClick={() => {
                storyHandler(elem);
              }}
              id="story"
              className="h-[70px]  mr-4 w-[50px] inline-block"
            >
              <img
                className="h-[50px] w-[50px] rounded-full object-cover object-center border-2 border-pink-600"
                src={elem.dp}
                alt=""
              />
              <h5 className="text-[8px] text-white font-sb text-center">
                {elem.username}
              </h5>
            </div>
          );
        })}
      </div>
      <div
        id="overlay"
        ref={storyRef}
        className="h-[34vw] bg-cover bg-center top-20 w-full absolute z-50 hidden"
      >
        <div id="progress" className="h-[0.1vw] w-full bg-black">
          <div
            ref={growthRef}
            id="growth"
            className="h-full bg-gray-600 w-1/2"
          ></div>
        </div>
        <div id="userdetails" className="h-[94%] flex flex-col justify-between">
          <div className="top flex items-center justify-start gap-6 bg-gradient-to-b from-black to-transparent">
            <div
              ref={dpRef}
              id="imgbox"
              className="w-[30px] h-[30px] border-2 border-pink-700 rounded-full bg-center bg-cover"
            ></div>
            <h4
              ref={usernameRef}
              className="text-white text-xs font-[monument]"
            ></h4>
          </div>
          <div className="w-full bottom px-6 text-white flex items-center justify-around">
            <input
              placeholder="Massage?"
              className="outline-none placeholder:text-white px-4 text-sm border h-[1.6vw] w-[80%] border-white  rounded-3xl bg-transparent "
              type="text"
            />
            <div id="essentials" className="flex gap-2">
            <i className="ri-heart-line like hover:text-pink-500 "></i>
            <i className="ri-messenger-fill message"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
