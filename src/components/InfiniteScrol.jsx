import image_one from "../assets/image_one.svg"
import image_two from "../assets/image_two.svg"
import image_three from "../assets/image_three.svg"
import image_four from "../assets/image_four.svg"
import image_five from "../assets/image_five.svg"
import image_six from "../assets/image_six.svg"
import Slider from "react-slick"

const InfiniteScroll = () => {
    // Responsive slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280, // xl
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024, // lg
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // md
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640, // sm
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 2000,
                }
            },
            {
                breakpoint: 480, // xs
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 2000,
                }
            }
        ]
    }

    return (
        <section className="pt-[60px] sm:pt-[70px] md:pt-[80px] lg:pt-[90px] xl:pt-[100px] pb-[80px] sm:pb-[100px] md:pt-[120px] lg:pb-[140px] xl:pb-[155px]">
            <div className="container">
                <div className="text-center">
                    <p className="text-[#6D28D9] text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-[18px] sm:leading-[19px] md:leading-[21px] pb-4 sm:pb-5 md:pb-6">
                        Trusted by teams at
                    </p>
                    <div className="max-w-[280px] sm:max-w-[500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px] mx-auto">
                        <Slider className="w-full" {...settings}>
                            <div>
                                <Items image={image_one} alt="Company logo 1" />
                            </div>
                            <div>
                                <Items image={image_two} alt="Company logo 2" />
                            </div>
                            <div>
                                <Items image={image_three} alt="Company logo 3" />
                            </div>
                            <div>
                                <Items image={image_four} alt="Company logo 4" />
                            </div>
                            <div>
                                <Items image={image_five} alt="Company logo 5" />
                            </div>
                            <div>
                                <Items image={image_six} alt="Company logo 6" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Items = ({ image, alt }) => {
    return (
        <div className="py-[8px] sm:py-[10px] px-[12px] sm:px-[16px] md:px-[20px] hover:bg-purple-300/50 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer mx-2 sm:mx-3 md:mx-4">
            <img 
                src={image} 
                alt={alt} 
                className="w-auto h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] xl:h-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
        </div>
    )
}

export default InfiniteScroll