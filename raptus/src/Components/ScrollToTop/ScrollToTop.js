import { useRouteChange } from "../../Utils/useRouteChange";

export const ScrollToTop = () => {
    useRouteChange(() => {window.scrollTo(0, 0)});

    return null;
};
