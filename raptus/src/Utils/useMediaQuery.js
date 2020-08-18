import { useEffect, useState } from "react";

export const useMediaQuery = (mediaQueryString) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);

    const listener = (event) => {
      setMatches(event.matches);
    };

    listener(mediaQueryList);

    mediaQueryList.addListener(listener);

    return () => {
      mediaQueryList.removeListener(listener);
    };
  });

  return matches;
};
