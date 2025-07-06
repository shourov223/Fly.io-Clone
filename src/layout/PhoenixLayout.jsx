import { Outlet } from "react-router"
import PhoenixNav from "../components/PhoenixNav"
import Footer from "../components/Footer"

const PhoenixLayout = () => {
    return (
        <main>
            <PhoenixNav />
            <Outlet />
            <Footer />
        </main>
    )
}

export default PhoenixLayout
