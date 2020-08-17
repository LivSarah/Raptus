import { useLocation } from "react-router-dom";
import { usePrevious } from "./usePrevious";
import { useEffect } from "react";

export const useRouteChange = (handler) => {
  const location = useLocation();
  const previousLocation = usePrevious(location);

  useEffect(() => {
    if (location !== previousLocation) {
      handler();
    }
  }, [location]);
};
