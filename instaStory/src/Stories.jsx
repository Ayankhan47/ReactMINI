import React, { useRef, useState } from "react";

const Stories = () => {
  localStorage.setItem("storydata", JSON.stringify(
    [ {
       "username": "Alex Ryan",
       dp: "https://images.unsplash.com/photo-1670521067474-e0cc150c94c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHMlMjBtb2RlbHN8ZW58MHwxfDB8fHww",
       story: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
     },
     {
       username: "Brahim Diaz",
       dp: "https://images.unsplash.com/photo-1583487960824-9f0e6bb411e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
       story: "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
     },
     {
       username: "David Beckham",
       dp: "https://images.unsplash.com/photo-1625642003187-573001b8a881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
       story: "https://images.unsplash.com/photo-1712530051320-55ea6df4ccce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFyY2hpdGVjaHR1cmV8ZW58MHwxfDB8fHww",
     },
     {
       username: "Nkolas Jakson",
       dp: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
       story: "https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D",
     },
     {
       username: "Kie Havartz",
       dp: "https://images.unsplash.com/photo-1615242454803-2116a934736a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
       story: "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D",
     },
   {
     username: "john doe",
     dp: "https://plus.unsplash.com/premium_photo-1687186953637-78a495aec485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
     story: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbHxlbnwwfDF8MHx8fDA%3D",
   },
   {
     username: "jane smith",
     dp: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
     story: "https://images.unsplash.com/photo-1500815845799-7748ca339f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfDF8MHx8fDA%3D",
   },
   {
     username: "alex 23",
     dp: "https://plus.unsplash.com/premium_photo-1683121838499-096c028c3381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
     story: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfDF8MHx8fDA%3D",
   },
   {
     username: "emma brown",
     dp: "https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
     story: "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MXwwfHx8MA%3D%3D",
   },
   {
     username: "chris walker",
     dp: "https://images.unsplash.com/photo-1623682536859-1f87582d8cb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBvdHJhaXRzJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
     story: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MXwwfHx8MA%3D%3D",
   },
    ]))
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
