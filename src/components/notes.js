// from DateRange file for the input tag's ref
/*
const inputRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (
        !isOpen ||
        inputRef.current && inputRef.current.contains(e.target) ||
        domNode.current && domNode.current.contains(e.target)
      ) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, setIsOpen, domNode]);
*/