import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
    const darkModeSaved: boolean = window.localStorage.getItem('darkmode') === 'true';
    const [darkMode, setDarkMode] = useState<boolean>(darkModeSaved);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('darkmode');
            window.localStorage.setItem('darkmode', JSON.stringify(true));
            console.log(window.localStorage.getItem('darkmode'));
        } else {
            document.body.classList.remove('darkmode');
            window.localStorage.setItem('darkmode', JSON.stringify(false));
            console.log(window.localStorage.getItem('darkmode'));
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}