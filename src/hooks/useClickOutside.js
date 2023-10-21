import React, { useEffect } from "react";

// source video at 11:58: https://www.youtube.com/watch?v=J-g9ZJha8FE&t=481s
const useClickOutside = (inputRef, componentRef, setIsOpen) => {
  useEffect(() => {
    const handleClick = (e) => {
      // hook to compare 2 sibling ref tags
      if (
        componentRef.current &&
        !componentRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        // both tags will not be considered a click outside because of their refs
        setIsOpen(false); // use this to close the component
        // console.log("outside was clicked");
      }
    };
    
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });
};

export default useClickOutside;
