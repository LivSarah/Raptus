import React, { useContext } from "react";
import FirebaseContext from "../../FirebaseContext";
import { usePromise } from "../../Utils/usePromise";

export const StandsCollection = ({ children }) => {
  const firebase = useContext(FirebaseContext);
  const stands = usePromise(firebase.stands(), []);

  return <>{children(stands)}</>;
};
