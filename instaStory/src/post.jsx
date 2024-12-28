import React, { useRef } from "react";

const Post = () => {
    const postData = JSON.parse(localStorage.getItem('postsData'))
    console.log(postData);
    
  return (
    <div id="posts" className="h-[75%] w-[100%] overflow-y-auto scrollbar-none">
      {postData.map(function (elem,idx) {
        return(
        <div key={idx} id="post" className="bg-black">
        <div
          id="user"
          className=" px-3 py-2 flex items-center justify-between gap-4 text-white"
        >
          <div className="left flex items-center justify-center gap-4">
            <img
              className="h-8 w-8 rounded-full"
              src={elem.profile_picture}
              alt=""
            />
            <h1 className="font-[monument] font-extralight text-xs ">
              {elem.username}
            </h1>
          </div>
          <div className="right">
            <i className="ri-more-2-line"></i>
          </div>
        </div>
        <div id="post_img">
            <img
              className="h-[20vw] w-[30vw] object-cover object-center"
              src={elem.image_url}
              alt=""
            />
        </div>
        <div className="bottom min-h-[6vw] text-white ">
              <div className="function flex items-center justify-between px-2">
                <div className="left flex items-center gap-3">
                  <i className="ri-heart-fill heart"></i>
                  <i className="ri-chat-3-line"></i>
                  <i className="ri-send-plane-line"></i>
                </div>
                <div className="right">
                  <i className="ri-bookmark-line"></i>
                </div>
              </div>
              <div className="likes text-xs">
                <h5>43,009 likes</h5>
              </div>
              <div className="caption text-sm">
                <p>{elem.caption}</p>
              </div>
            </div>
      </div>
        )
      })}
    </div>
  );
};

export default Post;
