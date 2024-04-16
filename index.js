import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function useUriHash() {
    const location = useLocation();

    function scrollIntoView() {
        try {
            if (location.hash !== "") {
                const el = document.querySelector(location.hash);
                if (el) {
                    el.scrollIntoView({
                        behavior: "instant"
                    });
                }
            }
        } catch (error) {
            console.log('Error caught in react-router-use-uri-hash', error);
        }

        // scroll to top of page (on page change) when component unmounts.
        return () => {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });
        }
    }

    // Listen for hash changes when staying on current page
    useEffect(() => {
        scrollIntoView(location.hash);
    }, [location]);
}

export { useUriHash }