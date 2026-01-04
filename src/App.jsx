import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Blog from "./pages/Blog";
import SplashScreen from './components/SplashScreen';
import Header from './components/Header'; // Apne folder structure ke hisaab se path check karein
import './styles/theme.css';


import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";
import NeonCursor from "./components/NeonCursor";
import GlitterCursor from "./components/GlitterCursor";
import Mentorship from "./pages/mentorship";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/theme.css";
import "./styles/scrollAnimations.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Show splash screen first
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // Main app after splash
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blogs" element={<Blog />} />

      </Routes>
    </Router>
    <>
      <NeonCursor />
      <GlitterCursor />

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentorship" element={<Mentorship />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
