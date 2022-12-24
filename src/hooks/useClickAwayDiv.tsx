import { RefObject, useEffect, useRef } from "react";

// Add more type if you need to
type useClickAwayDivTypes = HTMLDivElement | HTMLButtonElement;

const useClickAwayDiv = <T extends useClickAwayDivTypes>(
  onClickAway: () => void
): (RefObject<T> | null)[] => {
  const wrapperRef = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef?.current &&
        !wrapperRef?.current.contains(event.target as Node)
      ) {
        if (onClickAway) onClickAway();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return [wrapperRef];
};

export default useClickAwayDiv;
