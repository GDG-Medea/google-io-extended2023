import { useEffect, useState } from "react";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setVisible(isVisible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    return (
        <nav className={`p-3 lg:p-6 w-full shadow-md sticky  z-50 bg-bglight dark:bg-bgdark ${visible ? 'top-0' : '-top-20'} transition duration-300 ease-in-out`}>
            <div className="flex justify-between">
                <div className="flex  items-center gap-2">
                    <img src="/gdglogo.jpg" className="h-10 px-2 dark:invert bg-blend-overlay rounded-xl" />
                    <div className="">Google I/O Extended</div>
                </div>
                <div>
                    <button className="px-4 p-2 rounded-xl hover:border-white border-4 border-transparent  hover:bg-gdggreen-600 dark:hover:bg-gdggreen-500 dark:text-white dark:bg-gdggreen-500 bg-gdggreen-500">
                        <a href="https://linktoform.com">Join Us here!</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar