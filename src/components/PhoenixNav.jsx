import { useRef } from "react"
import { Link } from "react-router"

const PhoenixNav = () => {
    const nav = useRef(null)
    window.addEventListener("scroll", ()=>{
        if (window.scrollY > 100) {
            nav.current.style.background = "#191034"
        } else {
            nav.current.style.background = "transparent"
        }
    })
    return (
        <nav ref={nav} className="py-4 fixed top-0 left-0 w-full z-10 transition-all duration-200 ease-in">
            <div className="container">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <img src="/phoenixNav.svg" alt="logo" />
                    </div>
                    <ul className="flex items-center gap-3">
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-white font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/"}>Home</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-white font-medium text-[14px] leading-[22px] whitespace-nowrap" to={"/blog"}>Blog</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-white font-medium text-[14px] leading-[22px] whitespace-nowrap" to={""}>Phoenix Files</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-white font-medium text-[14px] leading-[22px] whitespace-nowrap" to={""}>Laravel Bytes</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-white font-medium text-[14px] leading-[22px] whitespace-nowrap" to={""}>Ruby Dispatch</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-white font-medium text-[14px] leading-[22px] whitespace-nowrap" to={""}>Django Beats</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-white font-medium text-[14px] leading-[22px] whitespace-nowrap" to={""}>JavaScript Journal</Link></li>
                    </ul>
                    <button className="py-2 px-3 bg-[#8B5CF6] rounded-[8px] text-[14px] font-medium leading-[23px] text-white cursor-pointer">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default PhoenixNav
