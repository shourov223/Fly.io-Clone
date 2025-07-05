import { Link } from "react-router"

const Banner = () => {
    return (
        <section className="bg_img pt-20 sm:pt-[90px] md:pt-[100px]">
            <div className="container">
                <h1 className="text-[#281950] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[63px] font-medium leading-[1.2] sm:leading-[1.25] md:leading-[1.3] lg:leading-[1.27] xl:leading-[80px] font-serif text-center max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[605px] mx-auto tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.4px] xl:tracking-[-2.88px]">
                    Run User (or Robot) Code on Fly Machines
                </h1>

                <p className="pt-3 sm:pt-4 text-[#281950]/75 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.65] md:leading-[1.7] lg:leading-[28px] pb-6 sm:pb-8 md:pb-10 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[656px] text-center mx-auto">
                    Give each of your users (or robots) a <span className="font-bold">code execution sandbox</span> that boots in milliseconds, runs any Docker image you throw at it, and scales to zero when you don't need it.
                </p>

                <div className="text-center pb-[80px] sm:pb-[120px] md:pb-[180px] lg:pb-[240px] xl:pb-[300px] 2xl:pb-[361px]">
                    <Link className="btn rounded-full font-medium inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[14px] sm:text-[16px] md:text-[18px] transition-all duration-300 hover:transform hover:scale-105">
                        Phoenix Files
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner