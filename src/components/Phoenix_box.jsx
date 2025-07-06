import { box } from "../pages/Blog"
import { Items } from "../pages/Blog"

const Phoenix_box = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-3 items-center gap-[20px] translate-y-[-35px]">
                    {
                        box.map((item) => {
                            return <Items key={item.id} image={item.img} publish={item.publisher} text={item.text} time={item.time} title={item.title} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Phoenix_box
