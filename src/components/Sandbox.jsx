import world from "../assets/world.svg"

const Sandbox = () => {
    return (
        <section className="pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[128px]">
            <div className="container">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-5 justify-between pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-[78px]">
                    <div className="max-w-full lg:max-w-[536px] text-center lg:text-left">
                        <h2 className="text-[#281950] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-medium leading-[1.3] sm:leading-[1.35] md:leading-[1.4] lg:leading-[47px] max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[356px] mx-auto lg:mx-0 tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.7px] lg:tracking-[-0.9px] pb-4 sm:pb-5 md:pb-6">
                            Full-Stack Sandboxes. Fly.io Metal.
                        </h2>
                        <p className="text-[#281950] font-light text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-[21px]">
                            Fly Machines are hardware-virtualized containers with a REST API, that can run any Docker image on our custom-built global cloud in 35 regions. Launch instantly and keep them running as long as you want them to – for a single HTTP request, or weeks of uptime.
                        </p>
                    </div>
                    <div className="flex-shrink-0 order-first lg:order-last">
                        <img 
                            src={world} 
                            alt="World map showing global coverage" 
                            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-none h-auto"
                        />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[64px] items-start">
                    <Items 
                        img={"/routing.svg"} 
                        title={"User-Specific Routing"} 
                        text={"Route each user (or robot) to their own dedicated sandbox with dynamic request routing using the Fly Proxy and fly-replay"}
                    />
                    <Items 
                        img={"/storage.svg"} 
                        title={"Persistent Storage"} 
                        text={"Give each of your users (or robots) their very own dedicated storage with Fly Volumes,Fly Managed Postgres"}
                    />
                    <Items 
                        img={"/cost.svg"} 
                        title={"Zero-Cost When Idle"} 
                        text={"Fly Machines automatically scale to zero when you don't need them, so you only pay for the compute you actually use."}
                    />
                    <Items 
                        img={"/mcp.svg"} 
                        title={"MCP Servers"} 
                        text={"Build remote Model Context Protocol (MCP) servers on Fly Machines to plug your sandbox into any LLM workflow."}
                    />
                </div>
            </div>
        </section>
    )
}

const Items = ({img, title, text}) => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center lg:items-start gap-4 sm:gap-6 md:gap-8 text-center sm:text-left">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
                <img 
                    src={img} 
                    alt={`${title} icon`} 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                />
            </div>
            <div className="max-w-full sm:max-w-[447px]">
                <h4 className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-[29px] font-medium pb-3 sm:pb-4 md:pb-5 lg:pb-[22px] text-[#281950]">
                    {title}
                </h4>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] sm:leading-[1.55] md:leading-[1.6] lg:leading-[25px] text-[#281950]/80">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Sandbox