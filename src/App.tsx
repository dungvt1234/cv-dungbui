import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Resume from "./components/Resume";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import WorkArchive from "./components/WorkArchive";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Landing({ onNavChange }: { onNavChange: (id: string) => void }) {
  useEffect(() => {
    const ids = ["#home", "#work", "#resume", "#contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) onNavChange(`#${e.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onNavChange]);

  return (
    <main>
      <Hero />
      <Works />
      <Journal />
      <Explorations />
      <Resume />
      <Stats />
    </main>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState("#home");
  const location = useLocation();

  return (
    <div className="bg-bg text-text-primary font-body">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <ScrollToTop />
          <Navbar active={location.pathname === "/" ? active : ""} />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Routes location={location}>
                <Route path="/" element={<Landing onNavChange={setActive} />} />
                <Route path="/work" element={<WorkArchive />} />
                <Route path="*" element={<Landing onNavChange={setActive} />} />
              </Routes>
              <Footer />
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
