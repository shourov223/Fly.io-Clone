import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index={true} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
