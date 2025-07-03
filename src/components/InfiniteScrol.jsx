import image_one from "../assets/image_one.svg"
import image_two from "../assets/image_two.svg"
import image_three from "../assets/image_three.svg"
import image_four from "../assets/image_four.svg"
import image_five from "../assets/image_five.svg"
import image_six from "../assets/image_six.svg"
import Slider from "react-slick"

const InfiniteScrol = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        cssEase: "linear",
        pauseOnHover: true
    }
    return (
        <section className="pt-[100px]" >
            <div className="container">
                <div className="text-center">
                    <p className="text-[#6D28D9] text-[14px] font-semibold leading-[21px] pb-6">Trusted by teams at</p>
                    <ul className="max-w-[1170px] mx-auto">
                        <Slider className="w-full" {...settings}>
                            <div>
                                <Items image={image_one} />
                            </div>
                            <div>
                                <Items image={image_two} />
                            </div>
                            <div>
                                <Items image={image_three} />
                            </div>
                            <div>
                                <Items image={image_four} />
                            </div>
                            <div>
                                <Items image={image_five} />
                            </div>
                            <div>
                                <Items image={image_six} />
                            </div>
                        </Slider>
                    </ul>
                </div>
            </div>
        </section >
    )
}
const Items = ({ image }) => {
    return <li className="py-[10px] px-[20px] hover:bg-purple-300/50 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
        <img src={image} alt="icons" />
    </li>
}

export default InfiniteScrol
