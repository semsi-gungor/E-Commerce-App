import { useState } from "react";

export default function useDelayedAnimation(timer) {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  function startAnimate() {
    setIsAnimating((prev) => !prev);
    if (isMounted) {
      var countdown = setTimeout(function () {
        setIsMounted(false);
      }, timer);
    } else {
      setIsMounted(true);
    }
  }

  return [isMounted, isAnimating, startAnimate];
}
