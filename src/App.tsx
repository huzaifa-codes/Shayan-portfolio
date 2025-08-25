import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout"; // 👈 import Layout
import Allcasestudy from "./pages/Allcasestudy";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Allcasestudy" element={<Allcasestudy/>} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
