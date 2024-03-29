import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
    const darkModeSaved: boolean = window.localStorage.getItem('darkmode') === 'true';
    const [darkMode, setDarkMode] = useState<boolean>(darkModeSaved);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('darkmode');
            document.body.setAttribute('data-bs-theme', 'dark');
            window.localStorage.setItem('darkmode', JSON.stringify(true));
        } else if (window.localStorage.getItem('darkmode') === null) {
        } else if (!darkMode) {
            document.body.classList.remove('darkmode');
            document.body.setAttribute('data-bs-theme', 'light');
            window.localStorage.setItem('darkmode', JSON.stringify(false));
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}