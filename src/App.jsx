import "./index.css";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { About } from "./Components/about";
import { Revenue } from "./Components/revenue";
import { Checkup } from "./Components/checkup";
import { Services } from "./Components/services";
import { Process } from "./Components/process";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Revenue />
      <Checkup />
      <Services />
      <Process />
      <Footer />
    </div>
  );
}

export default App;
