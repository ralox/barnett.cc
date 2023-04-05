import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'true' : 'false';
    let initial = localStorage.getItem('darkMode') === null ? prefersDark : localStorage.getItem('darkMode');
    initial = localStorage.getItem('darkMode') === 'true' ? true : false;
    const [darkMode, setDarkMode] = useState(initial);
    const docBody = document.querySelector('body');

    

    useEffect(() => {
        if ( darkMode ) {
            docBody.classList.add('dark-mode');
        } else {
            docBody.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        let newVal = false;

        if ( darkMode ) {
            newVal = false;
        } else {
            newVal = true;
        }
        
        localStorage.setItem('darkMode', newVal.toString());
        setDarkMode(newVal);
    }

    return (
        <button id="dark-mode-toggle" className="dark-mode-toggle" title="Toggle Dark Mode" onClick={toggleDarkMode}>
            <span hidden>Toggle Dark Mode</span>
            <img src={process.env.PUBLIC_URL +  "/img/dark-mode.svg"} />
        </button>
    );
}