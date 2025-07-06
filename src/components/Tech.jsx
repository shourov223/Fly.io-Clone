import phoenix from "../assets/phoenix.svg"
import slogo from "../assets/slogo.svg"
import rails from "../assets/rails.svg"
import docker from "../assets/docker.svg"
import go from "../assets/go.svg"
import rust from "../assets/rust.svg"
import django from "../assets/django.svg"
import laravel from "../assets/laravel.svg"
import nextjs from "../assets/nextjs.svg"

const Tech = () => {
  return (
    <section className="tect py-[60px] sm:py-[80px] md:py-[100px] lg:py-[128px]">
      <div className="container">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-[30px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px] xl:gap-[30px]">
          {/* Content Section */}
          <div className="text-center xl:text-left order-2 xl:order-1">
            <h2 className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[34px] font-medium leading-[1.3] sm:leading-[1.35] md:leading-[1.4] lg:leading-[1.45] xl:leading-[47px] text-white pb-4 sm:pb-5 md:pb-6 max-w-full xl:max-w-[500px]">
              Use the Tech You Love
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.65] md:leading-[1.7] lg:leading-[28px] font-light text-white/70 max-w-full sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[499px] mx-auto xl:mx-0">
              Build with your favorite framework. No Dockerfile? No problem: our CLI generates containers for most popular frameworks, including Rails, Phoenix, Django, Node, Laravel, and .NET.
            </p>
            <button className="py-[8px] sm:py-[10px] px-[16px] sm:px-[20px] rounded-full border border-white/25 backdrop-blur-[70px] text-white bg-gradient-to-l from-white/5 via-white/5 to-white/20 font-medium text-[13px] sm:text-[14px] leading-[20px] sm:leading-[23px] mt-6 sm:mt-8 hover:bg-gradient-to-l hover:from-white/10 hover:via-white/10 hover:to-white/30 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Tech Grid Section */}
          <div className="order-1 xl:order-2 w-full xl:w-auto flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[12px] sm:gap-[16px] md:gap-[18px] lg:gap-[20px] xl:gap-[22px] max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-none">
              <Box image={phoenix} alt="Phoenix framework" name="Phoenix" />
              <Box image={slogo} alt="Scala framework" name="Scala" />
              <Box image={rails} alt="Ruby on Rails" name="Rails" />
              <Box image={docker} alt="Docker" name="Docker" />
              <Box image={go} alt="Go language" name="Go" />
              <Box image={rust} alt="Rust language" name="Rust" />
              <Box image={django} alt="Django framework" name="Django" />
              <Box image={laravel} alt="Laravel framework" name="Laravel" />
              <Box image={nextjs} alt="Next.js framework" name="Next.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Box = ({ image, alt, name }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center group">
      <div className="flex items-center justify-center rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border border-white/25 bg-gradient-to-l from-white/5 via-white/5 to-white/20 py-[16px] sm:py-[20px] md:py-[26px] lg:py-[30px] xl:py-[34px] px-2 sm:px-3 md:px-4 h-[64px] sm:h-[72px] md:h-[80px] lg:h-[88px] xl:h-[96px] hover:bg-gradient-to-l hover:from-white/10 hover:via-white/10 hover:to-white/30 hover:border-white/40 transition-all duration-300 w-full">
        <img
          src={image}
          alt={alt}
          className="w-auto h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] xl:h-auto max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-white/80 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-medium mt-2 sm:mt-3 group-hover:text-white transition-colors duration-300">
        {name}
      </p>
    </div>
  )
}

export default Tech