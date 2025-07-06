import blog_banner_img from "../assets/blog_banner_img.jpg"
import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
import four from "../assets/four.jpg"
import five from "../assets/five.jpg"
import six from "../assets/six.jpg"
import seven from "../assets/seven.jpg"
import eight from "../assets/eight.jpg"
import nine from "../assets/nine.jpg"
import ten from "../assets/ten.jpg"
import eleven from "../assets/eleven.jpg"
import twelve from "../assets/twelve.jpg"

export const box = [
    {
        id: 1,
        img: one,
        publisher: "By Sam Ruby",
        time: "9 min Read",
        title: "What are MCP Servers?",
        text: "The introduction to Model Context Protocol starts out with: MCP is an open protocol that standardizes how applications provide context…"
    },
    {
        id: 2,
        img: two,
        publisher: "By Thomas Ptacek",
        time: "16 min Read",
        title: "My AI Skeptic Friends Are All Nuts",
        text: "Tech execs are mandating LLM adoption. That's bad strategy. But I get where they're coming from. Some of the smartest people I know…"
    },
    {
        id: 3,
        img: three,
        publisher: "By Sam Ruby",
        time: "3 min Read",
        title: "Using Kamal 2.0 in Production",
        text: "Agile Web Development with Rails 8 is off to production, where they do things like editing, indexing, pagination, and printing. In researchi…"
    },
    {
        id: 4,
        img: four,
        publisher: "By Peter Cai & Pavel Borzenkov",
        time: "22 min Read",
        title: "parking_lot: ffffffffffffffff...",
        text: "The basic idea is simple: customers give us Docker containers, and tell us which one of 30+ regions around the world they want them to…"
    },
    {
        id: 5,
        img: five,
        publisher: "By Ben Johnson",
        time: "8 min Read",
        title: "Litestream: Revamped",
        text: "Nearly a decade ago, I got a bug up my ass. I wanted to build full-stack applications quickly. But the conventional n-tier database design…"
    },
    {
        id: 6,
        img: six,
        publisher: "By Sam Ruby",
        time: "4 min Read",
        title: "Launching MCP Servers on Fly.io",
        text: "The Model Context Protocol is days away from turning six months old. You read that right, six months old. MCP Servers have both taken the…"
    },
    {
        id: 7,
        img: seven,
        publisher: "By Sam Ruby",
        time: "6 min Read",
        title: "Provisioning Machines using MCPs",
        text: "The Model Context Protocol is days away from turning six months old. You read that right, six months old. MCP Servers have both taken the…"
    },
    {
        id: 8,
        img: eight,
        publisher: "By Kurt Mackey",
        time: "4 min Read",
        title: "30 Minutes With MCP and flyctl",
        text: "The Model Context Protocol is days away from turning six months old. You read that right, six months old. MCP Servers have both taken the…"
    },
    {
        id: 9,
        img: nine,
        publisher: "By Kurt Mackey",
        time: "10 min Read",
        title: "Our Best Customers Are Now Robots",
        text: "The Model Context Protocol is days away from turning six months old. You read that right, six months old. MCP Servers have both taken the…"
    },
    {
        id: 10,
        img: ten,
        publisher: "By Thomas Ptacek",
        time: "15 min Read",
        title: "Operationalizing Macaroons",
        text: "1 We've spent too much time talking about security tokens, and about Macaroon tokens in particular. Writing another Macaroon treatise…"
    },
    {
        id: 11,
        img: eleven,
        publisher: "By Peter Cai",
        time: "7 min Read",
        title: "Taming A Voracious Rust Proxy",
        text: "1 We've spent too much time talking about security tokens, and about Macaroon tokens in particular. Writing another Macaroon treatise…"
    },
    {
        id: 12,
        img: twelve,
        publisher: "By Kurt Mackey",
        time: "10 min Read",
        title: "We Were Wrong About GPUs",
        text: "1 We've spent too much time talking about security tokens, and about Macaroon tokens in particular. Writing another Macaroon treatise…"
    },
]

const Blog = () => {
    return (
        <>
            {/* Banner Section */}
            <section className="blog_bg">
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-[30px] sm:mt-[40px] lg:mt-[50px] gap-6 lg:gap-8">
                        <div className="w-full lg:w-auto lg:flex-1">
                            <div className="max-w-full lg:max-w-[594px] flex items-center justify-between gap-2">
                                <p className="text-[10px] sm:text-[11px] lg:text-[10px] font-semibold leading-[17px] text-white whitespace-nowrap">By Chris McCord</p>
                                <span className="w-full h-[1px] bg-white/10"></span>
                                <p className="text-[10px] sm:text-[11px] lg:text-[10px] font-semibold leading-[17px] text-white whitespace-nowrap">7 min Read</p>
                            </div>
                            <h1 className="pt-[20px] sm:pt-[25px] lg:pt-[30px] text-white text-[24px] sm:text-[30px] lg:text-[36px] leading-[30px] sm:leading-[38px] lg:leading-[45px] font-medium pb-[20px] sm:pb-[25px] max-w-full lg:max-w-[494px]">
                                Phoenix.new – The Remote AI Runtime for Phoenix
                            </h1>
                            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-light leading-[24px] sm:leading-[27px] lg:leading-[30px] text-white/70 max-w-full lg:max-w-[572px]">
                                I wanted LLM agents to work just as well with Elixir as they do with Python and JavaScript. Last December, in order to figure out what that was going to take, I started a little weekend project to find ou…
                            </p>
                        </div>
                        <div className="rounded-[16px] overflow-hidden w-full lg:w-auto flex-shrink-0">
                            <img src={blog_banner_img} alt="image" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Items Section */}
            <section className="bg-[#F1F2F9] pb-[60px] sm:pb-[80px] lg:pb-[100px]">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[18px] lg:gap-[20px] translate-y-[-20px] sm:translate-y-[-25px] lg:translate-y-[-35px]">
                        {
                            box.map((item) => {
                                return <Items key={item.id} image={item.img} publish={item.publisher} text={item.text} time={item.time} title={item.title} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export const Items = ({ image, publish, time, title, text }) => {
    return (
        <div className="w-full max-w-[432px] mx-auto p-2 bg-white rounded-[16px] overflow-hidden hover:shadow hover:shadow-purple-400 transition-all duration-200">
            <div className="rounded-[10px] overflow-hidden">
                <img src={image} alt="image" className="w-full h-auto object-cover" />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-7 lg:pt-8">
                <div className="flex items-center justify-between gap-2 pb-3 sm:pb-4">
                    <p className="text-[#676B89] text-[9px] sm:text-[10px] font-semibold leading-[15px] sm:leading-[17px] whitespace-nowrap">{publish}</p>
                    <span className="w-full h-[1px] bg-[#F1F2F9]"></span>
                    <p className="text-[#676B89] text-[9px] sm:text-[10px] font-semibold leading-[15px] sm:leading-[17px] whitespace-nowrap">{time}</p>
                </div>
                <h3 className="text-[#22183C] text-[18px] sm:text-[20px] lg:text-[21px] font-medium leading-[26px] sm:leading-[28px] lg:leading-[30px] pb-3 sm:pb-4">{title}</h3>
                <p className="text-[#4C4E67] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[25px] lg:leading-[27px] font-light pb-[20px] sm:pb-[25px] lg:pb-[30px]">{text}</p>
            </div>
        </div>
    )
}

export default Blog