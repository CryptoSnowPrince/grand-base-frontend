import Footer from "./components/Footer";
import GrandMap from "./components/Grand-map";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/How-it-works";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Hero />
      <HowItWorks />
      <Vision />
      <GrandMap />
      <Footer />
    </div>
  );
}

export default App;
