import React, { useRef,useEffect, useState } from "react";
import Stories from "./Stories.jsx";
import Post from "./post.jsx";
import Nav from "./nav.jsx";
const App = () => {
  const cardRef = useRef(null)
  return (
    <div
      id="main"
      className="h-screen w-full bg-gray-950 flex items-center justify-center"
    >
      <div
      ref={cardRef}
        id="screen"
        className="h-[38vw] w-[20vw] overflow-hidden rounded-3xl relative "
      >
        <Nav />
        <Stories />
        <Post />
      </div>
    </div>
  );
};

export default App;
