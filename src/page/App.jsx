import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
// import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import About from "./Components/About";

// Import the necessary components for routing if needed.
// import About from "./Components/About";
// import Sponsor from "./Components/Sponsor";
// import Team from "./Components/Team";
// import Timeline from "./Components/Timeline";
// import Track from "./Components/Track";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Hero />
      <Companies />
      <Guide />
      {/* <Properties /> */}
      <Details />
      <GetStarted />
      <Footer />
      {/* <About /> Uncomment if you have an About component. */}

      <BrowserRouter>
        <Routes>
          {/* Uncomment and configure your routes */}
          {/* <Route path="/navbar" element={<Navbar />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/sponsor" element={<Sponsor />} /> */}
          {/* <Route path="/team" element={<Team />} /> */}
          {/* <Route path="/timeline" element={<Timeline />} /> */}
          {/* <Route path="/track" element={<Track />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
