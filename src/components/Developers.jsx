import img from "../assets/developers.png"

const Developers = () => {
    return (
        <section className="pt-[128px]">
            <div className="container">
                <div className="grid grid-cols-[533px_436px] items-center justify-between gap-3 py-[40px] px-[80px] rounded-[24px] dev">
                    <div>
                        <h2 className="text-[29px] font-medium leading-[39px] text-[#281950] pb-[18px]">Support By Developers For Developers</h2>
                        <p className="text-[#281950]/75 text-[18px] font-light leading-[28px]">Paid support packages include a team of actual engineers (not chatbots) who themselves ship code on our platform. Emergency support and guaranteed response times available.</p>
                    </div>
                    <div>
                        <img className="w-full h-full" src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Developers
