"use client";

import { BiCheck, BiHash, BiSend } from "react-icons/bi";
import {
  SiDiscord,
  SiGmail,
  SiInstagram,
  SiX,
} from "@icons-pack/react-simple-icons";

import { useState } from "react";

const CONTACT_EMAIL = "your@email.com";
const DISCORD_URL = "https://discord.com/users/yourid";
const TWITTER_URL = "https://x.com/yourhandle";
const INSTAGRAM_URL = "https://instagram.com/yourhandle";

const socials = [
  {
    label: "Email",
    handle: CONTACT_EMAIL,
    icon: <SiGmail size={16} color="#EA4335" />,
    href: `mailto:${CONTACT_EMAIL}`,
    color: "hover:border-red-400/30 hover:bg-red-500/8",
    accent: "text-red-400",
  },
  {
    label: "Discord",
    handle: "@yourhandle",
    icon: <SiDiscord size={16} color="#5865F2" />,
    href: DISCORD_URL,
    color: "hover:border-indigo-400/30 hover:bg-indigo-500/8",
    accent: "text-indigo-400",
  },
  {
    label: "Twitter / X",
    handle: "@yourhandle",
    icon: <SiX size={16} />,
    href: TWITTER_URL,
    color: "hover:border-white/20 hover:bg-white/6",
    accent: "text-white/60",
  },
  {
    label: "Instagram",
    handle: "@yourhandle",
    icon: <SiInstagram size={16} color="#E1306C" />,
    href: INSTAGRAM_URL,
    color: "hover:border-pink-400/30 hover:bg-pink-500/8",
    accent: "text-pink-400",
  },
];

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) return;
    const mailtoSubject = subject || `Message from ${name}`;
    const body = `Hi Timothy,\n\n${message}\n\n— ${name}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const canSubmit = name.trim().length > 0 && message.trim().length > 0;

  return (
    <section
      className="flex flex-col gap-6"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <h2 className="flex items-center gap-2 text-3xl font-bold text-white">
        <BiHash size={32} color="#757575" />
        Contact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Left: Form (3 cols) */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-6 flex flex-col gap-4">
          <div>
            <p className="text-base font-semibold text-white">Get in touch</p>
            <p className="text-sm text-white/40 mt-0.5">
              Fill out the form and it&apos;ll open your mail client ready to
              send.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* Name + Subject row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/35 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="rounded-xl border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/35 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Optional"
                  className="rounded-xl border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 focus:bg-white/8 transition-all duration-200"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-white/35 uppercase tracking-wider">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hey Timothy, I'd love to chat about..."
                rows={4}
                className="rounded-xl border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 focus:bg-white/8 transition-all duration-200 resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`self-end flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              sent
                ? "bg-emerald-500/20 border border-emerald-400/30 text-emerald-300"
                : canSubmit
                  ? "bg-sky-500/20 border border-sky-400/30 text-sky-300 hover:bg-sky-500/30 hover:border-sky-400/50 hover:text-sky-200"
                  : "border border-white/8 bg-white/4 text-white/20 cursor-not-allowed"
            }`}
          >
            {sent ? (
              <>
                <BiCheck size={15} />
                Opening mail…
              </>
            ) : (
              <>
                <BiSend size={14} />
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Right: Socials (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 px-1">
            Or contact me with…
          </p>

          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/4 px-4 py-3.5 transition-all duration-200 group ${s.color}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6 group-hover:bg-white/10 transition-all">
                {s.icon}
              </span>
              <span className="flex flex-col">
                <span
                  className={`text-sm font-semibold ${s.accent} group-hover:brightness-110`}
                >
                  {s.label}
                </span>
                <span className="text-xs text-white/30">{s.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
