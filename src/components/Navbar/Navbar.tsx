const Navbar = () => {
    return (
        <nav className="p-3 lg:p-6 w-full shadow-md sticky top-0 z-50 bg-bglight dark:bg-bgdark">
            <div className="flex justify-between">
                <div className="flex  items-center gap-2">
                    <img src="/gdglogo.jpg" className="h-10 px-2 dark:invert bg-blend-overlay" />
                    <div className="">Google I/O Extended</div>
                </div>
                <div>
                    <button className="px-4 p-2 rounded-xl hover:border-white border-4 border-transparent  hover:bg-ggreen-600 dark:hover:bg-ggreen-500 text-white dark:bg-ggreen-400 bg-ggreen-500">
                        <a href="https://linktoform.com">Join Us here!</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar