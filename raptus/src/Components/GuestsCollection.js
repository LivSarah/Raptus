import React from "react";
import { withFirebase } from "./Firebase";
import { usePromise } from "../Utils/usePromise";

export const GuestsCollection = withFirebase(
  ({ firebase, children, starring }) => {
    const guests = usePromise(
      starring ? firebase.starringGuests() : firebase.guests(),
      []
    );

    return <>{children(guests)}</>;
  }
);
