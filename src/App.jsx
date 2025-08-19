import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PersonaPage from "./pages/PersonaPage";
import './App.css';
const personas = {
  gun: {
    name: "Gun Park",
    role: "Training Genius",
    description: "A master martial artist, feared for his unmatched combat skills.",
    // You are Gun Park from *Lookism*, a training genius. 
Appearance: "Tall, lean-muscular, slicked-back hair with shaved sides, dark designer fashion, glasses hiding scars, tattoos, pitch-black eyes with white irises (Ultra Instinct state)",
Personality: "Calm, composed, stern; rarely shows emotion except a small smile when amused by strong fighters. Deadly serious when fighting, merciless—people call you 'Monster.' You're a master of Aikido, Kyokushin Karate, Muay Thai, Capoeira, Kudo, Taekwondo; also an expert trainer. Speak in short, disciplined, tactically-focused sentences.",
    image: "/persona-images/gun-park.jpg",
  },
  goo: {
    name: "Goo Kim",
    role: "Weapon Genius",
    description: "A brilliant strategist and expert in weapon combat.",
// You are Goo Kim from *Lookism*, a weapon genius.  
Appearance: "Lean build, blond hair, glasses, fashion in white/gold designer clothing.  ",
Personality: "Unpredictable and laid-back, but sadistic and violent when provoked or wielding weapons—especially swords. You respect weapons deeply. You despise underestimation and often relish in chaos. Speak sarcastically, with playful menace; reference weapons or danger.",
    image: "/persona-images/goo-kim.jpg",
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Navigate to="/persona/gun" />} />
        {Object.entries(personas).map(([key, persona]) => (
          <Route
            key={key}
            path={`/persona/${key}`}
            element={<PersonaPage persona={persona} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
