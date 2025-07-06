import { box } from "../pages/Blog"
import { Items } from "../pages/Blog"

const Phoenix_box = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                {/* Optional section header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        Latest Phoenix Content
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                        Discover the latest articles, tutorials, and insights from the Phoenix community
                    </p>
                </div>

                {/* Responsive grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
                    {box.map((item) => (
                        <div 
                            key={item.id}
                            className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                        >
                            <Items 
                                image={item.img} 
                                publish={item.publisher} 
                                text={item.text} 
                                time={item.time} 
                                title={item.title} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Phoenix_box