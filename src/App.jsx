import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import PhoenixLayout from "./layout/PhoenixLayout"
import Phoenix from "./pages/Phoenix"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
        <Route path="/phoenix" element={<PhoenixLayout />}>
          <Route index element={<Phoenix/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
