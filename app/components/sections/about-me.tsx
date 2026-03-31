"use client";

import {
  BiArrowToRight,
  BiChevronLeft,
  BiChevronRight,
  BiHash,
  BiLinkExternal,
} from "react-icons/bi";
import {
  describeWeather,
  getAge,
  getDisplayLocation,
  weatherAccent,
} from "@/app/utils/about";
import { favoriteSong, identity, projects } from "@/app/lib/content";
import { useEffect, useMemo, useState } from "react";

import LearnMoreModal from "../ui/modal";
import TechPill from "../ui/techpill";
import { WeatherState } from "@/app/types/weather";
import Widget from "../ui/widget";

function AboutMe() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [localTime, setLocalTime] = useState("");
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [weatherStatus, setWeatherStatus] = useState<
    "loading" | "ready" | "error"
  >("loading");

  const age = getAge(identity.birthDate);
  const safeLocation = getDisplayLocation(identity.location);
  const currentProjects = useMemo(() => {
    const flagged = projects.filter((project) => project.currentlyWorkingOn);
    return flagged.length > 0 ? flagged : projects.slice(0, 1);
  }, []);
  const currentProject = currentProjects[activeProject] ?? currentProjects[0];

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Warsaw",
    });

    const updateTime = () => {
      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadWeather() {
      try {
        setWeatherStatus("loading");

        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=54.352&longitude=18.6466&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FWarsaw",
        );

        if (!response.ok) {
          throw new Error("Weather request failed");
        }

        const data = await response.json();
        const current = data.current;

        if (!isMounted || !current) return;

        setWeather({
          temperature: Math.round(current.temperature_2m),
          windSpeed: Math.round(current.wind_speed_10m),
          weatherCode: current.weather_code,
        });
        setWeatherStatus("ready");
      } catch {
        if (!isMounted) return;
        setWeatherStatus("error");
      }
    }

    loadWeather();
    const interval = window.setInterval(loadWeather, 15 * 60_000);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const selectPreviousProject = () => {
    setActiveProject((current) =>
      current === 0 ? currentProjects.length - 1 : current - 1,
    );
  };

  const selectNextProject = () => {
    setActiveProject((current) =>
      current === currentProjects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section>
      {modalOpen && <LearnMoreModal onClose={() => setModalOpen(false)} />}

      <div
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="flex items-center gap-2 text-3xl font-bold leading-snug text-white">
              <BiHash size={32} color="#757575" />
              About me
            </h2>

            <p className="text-base leading-relaxed text-white/60">
              I&apos;ve been hooked on coding since a young age, starting with{" "}
              <a
                href="https://scratch.mit.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                Scratch
              </a>
              , then{" "}
              <a
                href="https://python.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                Python
              </a>
              , and eventually landing on{" "}
              <strong className="font-semibold text-sky-300">
                web development
              </strong>
              . Today I build with{" "}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                React
              </a>{" "}
              &amp;{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                Next.js
              </a>
              , always eager to pick up what&apos;s next. I really enjoy music
              too, so I love building music-related apps whenever I can.
              <br />
              <br />I am{" "}
              <strong className="font-semibold text-sky-300">
                {age} years old
              </strong>{" "}
              and based in{" "}
              <strong className="font-semibold text-sky-300">
                {safeLocation}.
              </strong>{" "}
              I speak{" "}
              <mark
                className="rounded-sm px-1 font-semibold"
                style={{
                  background: "rgba(1, 33, 105, 0.35)",
                  color: "#93b4ff",
                }}
              >
                English
              </mark>
              ,{" "}
              <mark
                className="rounded-sm px-1 font-semibold"
                style={{
                  background: "rgba(220, 20, 60, 0.25)",
                  color: "#ff9aaa",
                }}
              >
                Polish
              </mark>
              , and{" "}
              <mark
                className="rounded-sm px-1 font-semibold"
                style={{
                  background: "rgba(255, 213, 0, 0.2)",
                  color: "#ffd500",
                }}
              >
                Ukrainian
              </mark>{" "}
              fluently. In school I also work with{" "}
              <a
                href="https://angular.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                Angular
              </a>
              , and outside of web development I&apos;m comfortable with{" "}
              <a
                href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                C#
              </a>{" "}
              and{" "}
              <a
                href="https://dotnet.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                .NET
              </a>{" "}
              technologies like{" "}
              <a
                href="https://dotnet.microsoft.com/en-us/apps/maui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                MAUI
              </a>{" "}
              and{" "}
              <a
                href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                WPF
              </a>
              .{" "}
              <button
                onClick={() => setModalOpen(true)}
                className="inline cursor-pointer text-sm text-sky-400/70 underline underline-offset-2 transition-colors hover:text-sky-300"
              >
                ...learn more
              </button>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-300 transition-all duration-200 hover:border-sky-400/50 hover:bg-sky-500/30 hover:text-sky-200"
            >
              View my projects
              <BiArrowToRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/60 transition-all duration-200 hover:border-white/20 hover:bg-white/6 hover:text-white"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="grid content-start grid-cols-1 gap-3 sm:grid-cols-2">
          <Widget label="Currently working on" className="sm:col-span-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold text-white">
                    {currentProject.title}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/35">
                    {currentProject.dateRange}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={selectPreviousProject}
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-white/4 p-1.5 text-white/50 transition-all duration-200 hover:text-white hover:bg-white/8 hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed"
                    aria-label="Show previous project"
                  >
                    <BiChevronLeft size={16} />
                  </button>
                  <button
                    onClick={selectNextProject}
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-white/4 p-1.5 text-white/50 transition-all duration-200 hover:text-white hover:bg-white/8 hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed"
                    aria-label="Show next project"
                  >
                    <BiChevronRight size={16} />
                  </button>
                </div>
              </div>

              <p className="text-sm leading-6 text-white/58">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {currentProject.stack.slice(0, 4).map((tech) => (
                  <TechPill
                    key={`${currentProject.title}-${tech.iconName}`}
                    iconName={tech.iconName}
                    label={tech.label}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-1.5">
                  {currentProjects.map((project, index) => (
                    <button
                      key={project.title}
                      onClick={() => setActiveProject(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === activeProject
                          ? "w-6 bg-sky-400"
                          : "w-2 bg-white/15 hover:bg-white/30"
                      }`}
                      aria-label={`Show ${project.title}`}
                    />
                  ))}
                </div>

                {currentProject.liveUrl && currentProject.liveUrl !== "#" && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 transition-colors hover:text-sky-200"
                  >
                    Open project
                    <BiLinkExternal size={14} />
                  </a>
                )}
              </div>
            </div>
          </Widget>

          <Widget
            label="Current favorite song"
            className="h-full"
            contentClassName="flex flex-col"
          >
            <div className="mt-auto flex flex-col gap-3">
              <a
                href={favoriteSong.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 self-start text-xs font-medium text-sky-300 transition-colors hover:text-sky-200"
              >
                Open in Spotify
                <BiLinkExternal size={14} />
              </a>

              <div
                className={`rounded-xl border border-white/8 bg-linear-to-br ${favoriteSong.gradient} px-3 py-3`}
              >
                <div className="flex items-start gap-3">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-[0_12px_24px_rgba(0,0,0,0.2)]">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${favoriteSong.cover})` }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-white">
                      {favoriteSong.title}
                    </p>
                    <p className="mt-0.5 text-sm text-white/60">
                      {favoriteSong.artist}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Widget>

          <Widget label="Location" className="h-full">
            <div className="flex h-full flex-col justify-between gap-3">
              <div>
                <p className="text-base font-semibold text-white">
                  {safeLocation}
                </p>
                <p className="mt-1 text-sm text-white/45">
                  {localTime ? `Local time ${localTime}` : "Europe/Warsaw"}
                </p>
              </div>

              <div
                className={`rounded-xl border border-white/8 bg-linear-to-br ${weather ? weatherAccent(weather.weatherCode) : "from-white/8 to-transparent"} px-3 py-3`}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-white/30">
                  Weather
                </p>

                {weatherStatus === "ready" && weather ? (
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-2xl font-semibold text-white">
                        {weather.temperature}&deg;
                      </p>
                      <p className="text-sm text-white/55">
                        {describeWeather(weather.weatherCode)}
                      </p>
                    </div>
                    <p className="text-xs text-white/40">
                      Wind {weather.windSpeed} km/h
                    </p>
                  </div>
                ) : weatherStatus === "error" ? (
                  <p className="mt-2 text-sm text-white/45">
                    Couldn&apos;t load the forecast right now.
                  </p>
                ) : (
                  <div className="mt-2 animate-pulse space-y-2">
                    <div className="h-7 w-16 rounded-md bg-white/10" />
                    <div className="h-4 w-20 rounded-md bg-white/8" />
                    <div className="h-3 w-14 rounded-md bg-white/6" />
                  </div>
                )}
              </div>
            </div>
          </Widget>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
