import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'true' : 'false';
    let initial = localStorage.getItem('darkMode') === null ? prefersDark : localStorage.getItem('darkMode');
    localStorage.setItem('darkMode', initial);
    initial = initial === 'true' ? true : false;
    const [darkMode, setDarkMode] =  useState(initial);
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
            { darkMode ?
                <svg className="inline-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1220_7371)">
                    <rect width="64" height="64"/>
                    <path d="M32 18C39.732 18 46 24.268 46 32C46 39.732 39.732 46 32 46C24.268 46 18 39.732 18 32C18 24.268 24.268 18 32 18ZM32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24Z"/>
                    <path d="M32 3V11M52.5061 11.4939L46.8492 17.1508M61 32H53M52.5061 52.5061L46.8492 46.8492M32 61V53M11.4939 52.5061L17.1508 46.8492M3 32H11M11.4939 11.4939L17.1508 17.1508" stroke-width="6" stroke-linecap="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1220_7371">
                    <rect width="64" height="64" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                :
                <svg className="inline-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1220_7384)">
                    <path d="M60.2491 46.6158C45.2484 66.6158 19.534 63.3892 9.24903 50.1158C-1.01243 36.8728 1.24172 13.6526 22.7486 3.61582C10.7484 31.6158 30.2484 53.1158 60.2491 46.6158Z" stroke="black" stroke-width="6" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1220_7384">
                    <rect width="64" height="64" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            }
        </button>
    );
}