import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ApplyJob from "./pages/ApplyJob"
import Aplications from "./pages/Aplications"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/aplications" element={<Aplications />} />
      </Routes>
    </div>
  )
}

export default App
