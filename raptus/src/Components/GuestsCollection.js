import React, { useContext } from "react";
import FirebaseContext from "../FirebaseContext";
import { usePromise } from "../Utils/usePromise";

export const GuestsCollection = ({ children, starring }) => {
  const firebase = useContext(FirebaseContext);
  const guests = usePromise(
    starring ? firebase.starringGuests() : firebase.guests(),
    []
  );

  return <>{children(guests)}</>;
};
