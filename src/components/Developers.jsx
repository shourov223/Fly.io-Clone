import img from "../assets/developers.png"

const Developers = () => {
    return (
        <section className="pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[128px]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-3 py-[20px] sm:py-[25px] md:py-[30px] lg:py-[40px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] dev">
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[29px] font-medium leading-[1.3] sm:leading-[1.35] md:leading-[1.4] lg:leading-[1.35] xl:leading-[39px] text-[#281950] pb-[12px] sm:pb-[14px] md:pb-[16px] lg:pb-[18px] max-w-full lg:max-w-[450px] xl:max-w-none">
                            Support By Developers For Developers
                        </h2>
                        <p className="text-[#281950]/75 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-light leading-[1.6] sm:leading-[1.65] md:leading-[1.7] lg:leading-[1.65] xl:leading-[28px] max-w-full lg:max-w-[500px] xl:max-w-none">
                            Paid support packages include a team of actual engineers (not chatbots) who themselves ship code on our platform. Emergency support and guaranteed response times available.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <img 
                            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-[436px] h-auto object-contain" 
                            src={img} 
                            alt="Developer support team illustration" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Developers