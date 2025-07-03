import { Link } from "react-router"

const Banner = () => {
    return (
        <section className="bg_img pt-[50px]">
            <div className="container">
                <h1 className="text-[#281950] text-[63px] font-medium leading-[80px] font-serif text-center max-w-[605px] mx-auto tracking-[-2.88px]">Run User (or Robot) Code on Fly Machines</h1>
                <p className="pt-4 text-[#281950]/75 text-[18px] leading-[28px] pb-10 max-w-[656px] text-center mx-auto">Give each of your users (or robots) a <span className="font-bold">code execution sandbox</span> that boots in milliseconds, runs any Docker image you throw at it, and scales to zero when you don't need it.</p>
                <div className="text-center pb-[361px]">
                    <Link className="btn rounded-full font-medium">Phoenix Files</Link>
                </div>
            </div>
        </section>
    )
}

export default Banner
