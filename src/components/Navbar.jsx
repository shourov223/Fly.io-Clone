import { Link } from "react-router";
import { useRef, useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const nav = useRef(null)

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            nav.current.style.background = "#665eeb"
        } else {
            nav.current.style.background = "transparent"
        }
    })

    return (
        <nav ref={nav} className="py-4 fixed top-0 left-0 z-10 w-full backdrop-blur transition-all duration-300 ease-in">
            <div className="container">
                <div className="flex items-center justify-between gap-5">
                    {/* Logo */}
                    <Link to={"/"} className="flex-shrink-0">
                        <img src="/main_logo.svg" alt="Logo" className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-3 py-3 px-[25px] ul-shadow rounded-full">
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/"}>Home</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/blog"}>Blog</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/phoenix"}>Phoenix Files</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/"}>Laravel Bytes</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/"}>Ruby Dispatch</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/"}>Django Beats</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/"}>JavaScript Journal</Link></li>
                    </ul>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-[6px] rounded-full p-[6px] btn-style flex-shrink-0">
                        <button className="bg-white cursor-pointer py-[6px] px-3 text-[#202237] font-medium leading-[21px] text-[14px] rounded-l-full btn-1 hover:text-purple-700 transition-all duration-500">Sign In</button>
                        <button className="btn-2 cursor-pointer py-[6px] px-[10px] rounded-r-full text-[14px] leading-[21px] font-medium text-black">Get Started</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu with animation */}
                <div className={`lg:hidden bg-white shadow-2xl overflow-hidden transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[1000px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'}`}>
                    <div className="pt-4 pb-6 px-4">
                        {/* Mobile Navigation Links */}
                        <ul className="space-y-3 mb-6">
                            <li><Link className="block hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[16px] leading-[24px] py-2 px-4 rounded-lg hover:bg-gray-50" to={"/"}>Blog</Link></li>
                            <li><Link className="block hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[16px] leading-[24px] py-2 px-4 rounded-lg hover:bg-gray-50" to={"/"}>Phoenix Files</Link></li>
                            <li><Link className="block hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[16px] leading-[24px] py-2 px-4 rounded-lg hover:bg-gray-50" to={"/"}>Laravel Bytes</Link></li>
                            <li><Link className="block hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[16px] leading-[24px] py-2 px-4 rounded-lg hover:bg-gray-50" to={"/"}>Ruby Dispatch</Link></li>
                            <li><Link className="block hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[16px] leading-[24px] py-2 px-4 rounded-lg hover:bg-gray-50" to={"/"}>Django Beats</Link></li>
                            <li><Link className="block hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[16px] leading-[24px] py-2 px-4 rounded-lg hover:bg-gray-50" to={"/"}>JavaScript Journal</Link></li>
                        </ul>

                        {/* Mobile Auth Buttons */}
                        <div className="md:hidden flex flex-col gap-3 px-4">
                            <button className="w-full bg-white cursor-pointer py-3 px-4 text-[#202237] font-medium leading-[21px] text-[16px] rounded-full btn-1 hover:text-purple-700 transition-all duration-500 border border-gray-200">Sign In</button>
                            <button className="w-full btn-2 cursor-pointer py-3 px-4 rounded-full text-[16px] leading-[21px] font-medium text-black">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
