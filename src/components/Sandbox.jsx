import world from "../assets/world.svg"

const Sandbox = () => {
    return (
        <section className="pt-[128px]">
            <div className="container">
                <div className="flex items-center gap-5 justify-between pb-[78px]">
                    <div className="max-w-[536px]">
                        <h2 className="text-[#281950] text-[35px] font-medium leading-[47px] max-w-[356px] tracking-[-0.9px] pb-6">Full-Stack Sandboxes. Fly.io Metal.</h2>
                        <p className="text-[#281950] font-light text-[18px] leading-[21px]">Fly Machines are hardware-virtualized containers with a REST API, that can run any Docker image on our custom-built global cloud in 35 regions. Launch instantly and keep them running as long as you want them to – for a single HTTP request, or weeks of uptime.</p>
                    </div>
                    <div>
                        <img src={world} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[64px] items-center">
                    <Items img={"/routing.svg"} title={"User-Specific Routing"} text={"Route each user (or robot) to their own dedicated sandbox with dynamic request routing using the Fly Proxy and fly-replay"}/>
                    <Items img={"/storage.svg"} title={"Persistent Storage"} text={"Give each of your users (or robots) their very own dedicated storage with Fly Volumes,Fly Managed Postgres"}/>
                    <Items img={"/cost.svg"} title={"Zero-Cost When Idle"} text={"Fly Machines automatically scale to zero when you don't need them, so you only pay for the compute you actually use."}/>
                    <Items img={"/mcp.svg"} title={"MCP Servers"} text={"Build remote Model Context Protocol (MCP) servers on Fly Machines to plug your sandbox into any LLM workflow."}/>
                </div>
            </div>
        </section>
    )
}
const Items = ({img,title,text}) => {
    return (
        <div className="flex items-start gap-8">
            <div>
                <img src={img} alt="icon" />
            </div>
            <div className="max-w-[447px]">
                <h4 className="text-[21px] leading-[29px] font-medium pb-[22px] text-[#281950]">{title}</h4>
                <p className="text-[16px] leading-[25px]">{text}</p>
            </div>
        </div>
    )
}

export default Sandbox
