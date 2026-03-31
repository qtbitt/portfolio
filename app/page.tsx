"use client";

import AboutMe from "./components/sections/about-me";
import CTABanner from "./components/sections/cta-banner";
import Contact from "./components/sections/contact";
import Experience from "./components/sections/expierence";
import FeaturedProjects from "./components/sections/featured-projects";
import Footer from "./components/ui/footer";
import Hero from "./components/sections/hero";
import MyWork from "./components/sections/my-work";
import Navbar from "./components/ui/navbar";
import Stack from "./components/sections/stack";
import { useCallback, useEffect, useRef, useState } from "react";

type View = "home" | "my-work";

const FADE_DURATION_MS = 220;
const homeHashes = new Set(["", "#", "#home", "#contact", "#projects"]);

function resolveNavigation(hash: string): { view: View; activeHref: string } {
  if (hash === "#my-work" || hash === "#work") {
    return { view: "my-work", activeHref: "#my-work" };
  }

  if (homeHashes.has(hash)) {
    return { view: "home", activeHref: "#home" };
  }

  return { view: "home", activeHref: "#home" };
}

function scrollToHashTarget(hash: string) {
  if (!hash || hash === "#" || hash === "#home" || hash === "#my-work") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.querySelector(hash);
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Home() {
  const [view, setView] = useState<View>("home");
  const [activeHref, setActiveHref] = useState("#home");
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const displayedViewRef = useRef<View>("home");
  const targetViewRef = useRef<View>("home");
  const visibleRef = useRef(true);

  useEffect(() => {
    displayedViewRef.current = view;
  }, [view]);

  useEffect(() => {
    visibleRef.current = isVisible;
  }, [isVisible]);

  const navigateTo = useCallback((hash: string, updateHistory = true) => {
    const nextHash = hash || "#home";
    const resolved = resolveNavigation(nextHash);
    const displayedView = displayedViewRef.current;
    const targetView = targetViewRef.current;
    const isTransitioning = !visibleRef.current;

    setActiveHref(resolved.activeHref);

    if (!isTransitioning && resolved.view === displayedView) {
      targetViewRef.current = displayedView;

      if (updateHistory && window.location.hash !== nextHash) {
        window.history.pushState(null, "", nextHash);
      }

      requestAnimationFrame(() => {
        scrollToHashTarget(nextHash);
      });
      return;
    }

    if (isTransitioning && resolved.view === targetView) {
      if (updateHistory && window.location.hash !== nextHash) {
        window.history.pushState(null, "", nextHash);
      }

      requestAnimationFrame(() => {
        scrollToHashTarget(nextHash);
      });
      return;
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isTransitioning && resolved.view === displayedView) {
      targetViewRef.current = displayedView;

      if (updateHistory && window.location.hash !== nextHash) {
        window.history.pushState(null, "", nextHash);
      }

      setIsVisible(true);
      requestAnimationFrame(() => {
        scrollToHashTarget(nextHash);
      });
      return;
    }

    targetViewRef.current = resolved.view;
    setIsVisible(false);

    timeoutRef.current = window.setTimeout(() => {
      setView(resolved.view);
      displayedViewRef.current = resolved.view;
      targetViewRef.current = resolved.view;

      if (updateHistory && window.location.hash !== nextHash) {
        window.history.pushState(null, "", nextHash);
      }

      requestAnimationFrame(() => {
        scrollToHashTarget(nextHash);
        setIsVisible(true);
      });
    }, FADE_DURATION_MS);
  }, []);

  useEffect(() => {
    const initialHash = window.location.hash || "#home";
    const resolved = resolveNavigation(initialHash);

    requestAnimationFrame(() => {
      setView(resolved.view);
      displayedViewRef.current = resolved.view;
      targetViewRef.current = resolved.view;
      setActiveHref(resolved.activeHref);
      scrollToHashTarget(initialHash);
    });

    const handleHashChange = () => {
      navigateTo(window.location.hash || "#home", false);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [navigateTo]);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-0 h-96 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #888 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />

      <Navbar activeHref={activeHref} onNavigate={navigateTo} />

      <div
        className={`transition-all duration-200 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <main>
          {view === "home" ? (
            <>
              <Hero />
              <AboutMe />
              <Experience />
              <FeaturedProjects />
              <Stack />
              <Contact />
              <CTABanner />
            </>
          ) : (
            <MyWork />
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Home;
