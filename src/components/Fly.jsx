import fly from "../assets/fly.png"

const Fly = () => {
    return (
        <section className="py-16 md:py-24 lg:py-32">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    <div className="max-w-full lg:max-w-[536px] text-center lg:text-left">
                        <h2 className="text-[#281950] text-2xl sm:text-3xl md:text-4xl lg:text-[35px] leading-tight lg:leading-[48px] font-medium pb-4 lg:pb-[14px]">
                            Need Thousands of Fly Machines?
                        </h2>
                        <p className="text-[#281950]/75 text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] font-light">
                            If you're building something that requires Fly Machines by the thousands, we're here to help. We'd love to talk through your architecture and ensure you can scale effortlessly.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <img 
                            src={fly} 
                            alt="Fly machines illustration" 
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fly