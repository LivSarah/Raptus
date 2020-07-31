import React, { useEffect } from "react";
import { usePrevious } from '../Utils/usePrevious';
import { withRouter } from "react-router-dom";

export const ScrollToTop = withRouter(({location}) => {
    const previousLocation = usePrevious(location);

    useEffect(() => {
        if (location !== previousLocation) {
			window.scrollTo(0, 0);
		}
    });

    return null;
});
