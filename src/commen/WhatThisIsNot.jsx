import React, { useEffect, useRef, useState } from "react";
import preeti from "../assets/preeti.webp";
import {MoveRight} from "lucide-react"
import InvitationPopup from "./InvitationPopup";
const WhatThisIsNot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preetiVisible, setPreetiVisible] = useState(false);
const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const sectionRef = useRef(null);
  const preetiSectionRef = useRef(null);

  // Combined into row pairs so the grid is a true 2-col x 3-row layout.
  // Row 1: left/right item 1 | Row 2: left/right item 2 | Row 3: left item 3 + button / right item 2
  const rows = [
    {
      left: {
        title: "It Is Not A Trek.",
        text: "There is walking. There is no summit, no distance to cover, nothing to complete.",
      },
      right: {
        title: "It Is Not Therapy.",
        text: "The work is real and it is structured, but it is a facilitated circle, not treatment. Preeti is trained in expressive movement theropy - she is not your therapist for these six days. If you are in the middle of something acute, this is not the right room, and we will say so on the call.",
      },
    },
    {
      left: {
        title: "It Is Not A Silent Retreat.",
        text: "Nobody will ask you to stop speaking, or to meditate, or to give up your coffee.",
      },
      right: {
        title: "It Is Not A Networking Room.",
        text: "People here will not be trading business cards, and the fact that nobody asks what you do is not an accident.",
      },
    },
    {
      left: {
        title: "And There Are Hours Where Nothing Is Planned.",
        text: "Some people find that harder than anything else in the six days. We think it is the most important part.",
      },
      right: null, // button goes here instead of a text item
    },
  ];

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop observing after first animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

   
  useEffect(() => {
    const element = preetiSectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPreetiVisible(true);

          // Stop observing after first animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sectionRef}>
        <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20">
          <div className="mx-auto">

            {/* Main Heading - LEFT → RIGHT */}
            <h2
              className={`mb-10 font-['Oswald'] text-3xl font-bold text-neutral-900 sm:mb-14 sm:text-4xl ${
                isVisible
                  ? "animate-[fromLeft_1.5s_ease-out_both]"
                  : "opacity-0"
              }`}
            >
              What This Is Not.
            </h2>

            {/* 2-column x 3-row grid: each row renders one left cell + one right cell */}
            <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              {rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {/* Left cell */}
                  <div
                    className={
                      isVisible
                        ? "animate-[fromBottom_1.5s_ease-out_both]"
                        : "opacity-0"
                    }
                    style={{
                      animationDelay: `${0.2 + rowIndex * 0.12}s`,
                    }}
                  >
                    <h3 className="mb-2 font-semibold text-neutral-900 sm:text-xl font-[oswald]">
                      {row.left.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600 font-[syne]">
                      {row.left.text}
                    </p>
                  </div>

                  {/* Right cell — either a text item, or the button on the last row */}
                  {row.right ? (
                    <div
                      className={
                        isVisible
                          ? "animate-[fromBottom_1.5s_ease-out_both]"
                          : "opacity-0"
                      }
                      style={{
                        animationDelay: `${0.35 + rowIndex * 0.12}s`,
                      }}
                    >
                      <h3 className="mb-2 font-semibold text-neutral-900 sm:text-xl font-[oswald]">
                        {row.right.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-neutral-600 font-[syne]">
                        {row.right.text}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-start">
                     
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
           <button
                        onClick={() => setIsInvitationOpen(true)}
                        className={`group relative mt-12 flex w-fit items-center gap-2 overflow-hidden font-['syne'] rounded-full border border-neutral-900 px-6 py-3 text-base font-medium text-neutral-900 ${
                          isVisible
                            ? "animate-[fromLeft_1.5s_ease-out_0.5s_both]"
                            : "opacity-0"
                        }`}
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
                            bg-neutral-900
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
                            gap-2
                            transition-colors
                            duration-500
                            group-hover:text-white
                          "
                        >
                          Request An Invitation

                          <span
                            className="
                              transition-transform
                              duration-500
                              group-hover:translate-x-1
                            "
                          >
                            <MoveRight />
                          </span>
                        </span>
                      </button>
        </section>
      </div>

      <InvitationPopup
        isOpen={isInvitationOpen}
        onClose={() => setIsInvitationOpen(false)}
      />
    </>
  );
};

export default WhatThisIsNot;