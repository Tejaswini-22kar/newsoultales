import React, { useEffect, useRef, useState } from "react";
import footerBg from "../assets/footerimg.webp";
import footerlogo from "../assets/footerlogo.webp";
import { MoveRight } from "lucide-react";
import InvitationPopup from "./InvitationPopup";

const Footer = () => {
  const quickLinks = [
    "True North",
    "The Valley",
    "The Six Days",
    "What You Take Back",
    "What This Is Not",
    "Preeti - Founder",
  ];
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const socialLinks = ["Instagram", "LinkedIn", "Twitter/X", "Facebook"];

  // --- Logo top-to-bottom reveal animation ---
  const logoRef = useRef(null);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLogoVisible(true);
        } else {
          // remove this else-block if you want it to animate only once
          setLogoVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Local keyframes for the top shimmer line */}
      <style>{`
        @keyframes footerTopShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .footer-top-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0) 35%,
            rgba(255,255,255,0.9) 50%,
            rgba(255,255,255,0) 65%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: footerTopShimmer 3.5s linear infinite;
        }
      `}</style>

      {/* Animated line at the very top of the footer */}
      <div className="absolute top-0 left-0 h-[2px] w-full z-20 footer-top-line" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto  pb-0 px-6 py-14 sm:px-10 sm:pt-28 md:px-20">
        {/* Top Row: Quick Links / Center Message / Social */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-4">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-2xl   font-bold tracking-wide font-[oswald]">
              Quick Link
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="transition-opacity hover:opacity-70 font-[inter] text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Content */}
          <div className="order-first flex flex-col items-center text-center md:order-none py-14">
            <h2 className="font-['Oswald'] text-xl font-semibold leading-snug sm:text-2xl">
              What Made You Dependable Is What Made You Disappear.
            </h2>

            <button
              onClick={() => setIsInvitationOpen(true)}
              className="
                group
                relative
                mt-6
                overflow-hidden
                rounded-full
                bg-white
                px-7
                py-3
                font-['syne']
                text-sm
                font-medium
                text-black
                transition-colors
                duration-1000
                sm:px-8
                sm:py-3.5
                sm:text-base
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-full
                  w-0
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-black
                  opacity-40
                  transition-all
                  duration-1000
                  ease-in-out
                  group-hover:w-[150%]
                  group-hover:opacity-100
                "
              />
              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-3
                  transition-colors
                  duration-700
                  group-hover:text-white
                "
              >
                Request an Invitation
                <span
                  className="
                    text-xl
                    leading-none
                    transition-transform
                    duration-700
                    group-hover:translate-x-1
                  "
                >
                  <MoveRight />
                </span>
              </span>
            </button>
          </div>

          {/* Stay Connected */}
          <div className="text-center md:text-right">
            <h3 className="mb-4 text-2xl   font-bold tracking-wide font-[oswald]">
              Stay Connected
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="transition-opacity hover:opacity-70 font-[inter] text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mt-16 text-center sm:mt-20">
          <img
            ref={logoRef}
            src={footerlogo}
            alt=""
            className={`w-[720px] m-auto transition-all duration-1000 ease-out ${
              logoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-16"
            }`}
          />
        </div>

        {/* Bottom Bar */}
        <div className="py-5 flex flex-col items-center gap-3     text-xs text-white/70 sm:mt-14 sm:flex-row sm:justify-between">
          <p>© 2026 Soul Tales. All rights reserved.</p>
          <p className="order-first sm:order-none">
            Thoughtfully Curated And Marketed By Osumare
          </p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:opacity-70">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:opacity-70">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
      <InvitationPopup
        isOpen={isInvitationOpen}
        onClose={() => setIsInvitationOpen(false)}
      />
    </footer>
  );
};

export default Footer;