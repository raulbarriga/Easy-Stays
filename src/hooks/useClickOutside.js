import { useEffect } from "react";

const useClickOutside = (inputRef, componentRef, setIsOpen) => {
  useEffect(() => {
    // hook to compare 2 sibling ref tags
    const handleClick = (e) => {
      // think of it like this: what's considered a click outside?
      // if e.target occurs inside the input tag, then that's not a click outside, let the input handle that onClick
      // only call this hook if e.target is not inside the component AND the input ref
      if (
        componentRef.current &&
        !componentRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        // both tags will not be considered a click outside because of their refs
        setIsOpen(false); // use this to close the component
        // console.log("outside was clicked");
        console.log("hook was called")
      }
    };
    
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });
};

export default useClickOutside;
