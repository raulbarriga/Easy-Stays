import React, { useRef, useEffect } from "react";

// source video at 11:58: https://www.youtube.com/watch?v=J-g9ZJha8FE&t=481s
const useClickOutside = (callback) => {
  let domNode = useRef(); // returned to client, who marks "border" element
  // const handleClick = (event) => {
  //   if (domNodeRef.current && !domNodeRef.current.contains(event.target)) {
  //     onToggle((preVal) => !preVal);
  //   }
  // };
  useEffect(() => {
    // todo: check if the input ref's the one being targeted/clicked on
    // if it is, then set onToggle(false),
    // also check if it's false first(?)
    const handleClick = (e) => {
      // if (e.target === inputRef.current) {
      //   // The input tag was clicked.
      //   onToggle((preVal) => !preVal);
      //   console.log("inputRef was clicked");
      // } else if (domNode.current && !domNode.current.contains(e.target)) {
      //   // The user clicked outside of the domNode element.
      //   onToggle((preVal) => !preVal);
      //   console.log("outside ref was clicked");
      // }
      // e.target === inputRef.current
      if (domNode.current && !domNode.current.contains(e.target)) {
        // The input tag was clicked.
        callback();
        console.log("outside was clicked");
       } 
      //  else if (domNode.current && !e.composedPath?.includes?.(inputRef.current)) {
        // The user clicked outside of the domNode element and the input tag was not clicked.
        // onToggle((preVal) => !preVal);
        // console.log("outside ref was clicked");
      //  }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });
  return domNode;
};

export default useClickOutside;
