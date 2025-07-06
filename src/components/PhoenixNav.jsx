import { useRef, useEffect, useState } from "react"
import { Link } from "react-router"

const PhoenixNav = () => {
    const nav = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 100
            setIsScrolled(scrolled)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Phoenix Files", path: "/phoenix-files" },
        { name: "Laravel Bytes", path: "/laravel-bytes" },
        { name: "Ruby Dispatch", path: "/ruby-dispatch" },
        { name: "Django Beats", path: "/django-beats" },
        { name: "JavaScript Journal", path: "/javascript-journal" }
    ]

    return (
        <nav 
            ref={nav} 
            className={`py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-[#191034] backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img 
                            src="/phoenixNav.svg" 
                            alt="Phoenix Logo" 
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    className="hover:text-purple-400 transition-colors duration-300 text-white font-medium text-sm whitespace-nowrap"
                                    to={item.path}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA Button */}
                    <button className="hidden lg:block py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg text-sm font-medium text-white transition-all duration-300 transform hover:scale-105">
                        Get Started
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                        ? 'max-h-96 opacity-100 mt-4' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <div className="bg-[#191034]/95 backdrop-blur-md rounded-xl p-4 space-y-3">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                className="block py-2 px-3 text-white hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-300 text-sm font-medium"
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button 
                            className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg text-sm font-medium text-white transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default PhoenixNav