import { DarkThemeToggle } from 'flowbite-react';
import { useState,useEffect } from 'react';

function Nav() {
    const [theme, setTheme] = useState("Dark Mode");

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    const isDark = document.documentElement.classList.contains('dark');
                    setTheme(isDark ? "Dark Mode" : "Light Mode");
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);


  return (
    <div className='bg-white dark:bg-blue-900 h-[50px] w-full'>
        <div className='flex justify-between items-center text-gray-950 dark:text-white  transition-all duration-100 ease-in w-[80%] m-auto '>
                <p className='font-extrabold'>Where in the world?</p>
                <div onClick={() => setTheme} className='flex justify-between items-center'>
                    <DarkThemeToggle className='hover:bg-white dark:hover:bg-blue-900 focus:ring-0'/>
                   <span> {theme}</span>
                </div>
        </div>
    </div>
  );
}

export default Nav