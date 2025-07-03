import { Link } from "react-router"

const Navbar = () => {
    return (
        <nav className="pt-4">
            <div className="container">
                <div className="flex items-center justify-between gap-5">
                    <div>
                        <img src="/main_logo.svg" alt="" />
                    </div>
                    <ul className="flex items-center gap-3 py-3 px-[25px] ul-shadow rounded-full">
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px]" to={"/"}>Blog</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px]" to={"/"}>Phoenix Files</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px]" to={"/"}>Laravel Bytes</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px]" to={"/"}>Ruby Dispatch</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px]" to={"/"}>Django Beats</Link></li>
                        <li><Link className="hover:text-purple-700 transition-all duration-500 text-[#202237] font-medium text-[14px] leading-[22px]" to={"/"}>JavaScript Journal</Link></li>
                    </ul>
                    <div className="flex items-center gap-[6px] rounded-full p-[6px] btn-style">
                        <button className="bg-white cursor-pointer py-[6px] px-3 text-[#202237] font-medium leading-[21px] text-[14px] rounded-l-full btn-1 hover:text-purple-700 transition-all duration-500">Sign In</button>
                        <button className="btn-2 cursor-pointer py-[6px] px-[10px] rounded-r-full text-[14px] leading-[21px] font-medium text-black">Get Started</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
