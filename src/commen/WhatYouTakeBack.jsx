import React, { useEffect, useRef, useState } from "react";

const WhatYouTakeBack = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      title: "A Sentence You Have Never Said Out Loud.",
      text: "Said, on Day 3, in front of people who did not flinch. That specific thing you've been carrying for eleven years - it doesn't disappear, but it stops being a private weight, and that changes what it can do to you.",
    },
    {
      title: "One Thing You Can Use On A Bad Tuesday.",
      text: "A single practice, taught on Day 5, small enough that you'll still be doing it in February. Not a routine you'll abandon by the second week. One thing, for the moment in the car park before you go back in.",
    },
    {
      title: "Your Own Preferences, Back In Working Order.",
      text: "By Day 4 most people can answer the question about dinner. It sounds trivial. It is the beginning of everything else.",
    },
    {
      title: "Fifteen People Who Saw You Without It On.",
      text: "You have colleagues, clients, family, and possibly not one person who has seen you undefended. After six days by the same fire, sixteen people have. That doesn't expire in December - half the people who have come on these journeys have come back, and most of them came back for the room, not the valley.",
    },
    {
      title: "Twelve Months, Not Six Days.",
      text: "The circle stays. One prompt a month. A group call at six weeks, dated before you leave. A one-to-one with Preeti at three months. An open seat at the next edition's opening circle, wherever it is.",
    },
    {
      title: "What You Made.",
      text: "Objects, written pages, and one photograph of you that is not a group photo. In March a letter arrives that you wrote to yourself in Tirthan and will have forgotten posting.",
    },
    {
      title: "And The Part Other People Notice.",
      text: `Nobody at home will ask about the river. What they will notice, four to six weeks later, is that you're not snapping. That you finished a sentence you'd normally have cut short. That you were actually in the room at dinner.

That's the return. It doesn't show up in your calendar. It shows up in the people around you.`,
    },
  ];

  // Observer for heading/subheading
  useEffect(() => {
    const element = headingRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Separate observer for EACH card, so it animates only when
  // that individual card enters the viewport
  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <section className="w-full bg-white px-4 py-16 sm:px-8 sm:py-6 md:px-12 lg:px-20">
        <div className="mx-auto">

          {/* Heading */}
          <h2
            ref={headingRef}
            className={`text-center font-['Oswald'] text-3xl font-semibold text-neutral-900 sm:text-4xl ${
              headingVisible
                ? "animate-[fromRight_1.5s_ease-out_both]"
                : "opacity-0"
            }`}
          >
            What You Take Back.
          </h2>

          {/* Subheading */}
          <p
            className={`mx-auto mt-4 max-w-xl text-center font-['Syne'] text-sm text-neutral-600 sm:text-base ${
              headingVisible
                ? "animate-[fromRight_1.5s_ease-out_0.15s_both]"
                : "opacity-0"
            }`}
          >
            Nobody comes back from six days a different person, and anyone
            promising that is selling something. Here is what actually comes
            back with you.
          </p>

          {/* Cards */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {cards.map((card, index) => {
              const isLast = index === cards.length - 1;
              const row = Math.floor(index / 3);
              const isEvenRow = row % 2 === 0;
              const direction = isEvenRow ? "fromLeft" : "fromRight";
              const isVisible = visibleCards[index];

              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`bg-[#FCF8F5] p-6 text-left sm:p-7 ${
                    isLast
                      ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:col-span-1 lg:col-start-2 lg:mx-0 lg:w-auto lg:max-w-none"
                      : ""
                  } ${isVisible ? "" : "opacity-0"}`}
                  style={
                    isVisible
                      ? {
                          animation: `${direction} 1s ease-out both`,
                        }
                      : undefined
                  }
                >
                  {/* Card Title */}
                  <h3 className="font-['Oswald'] text-xl font-semibold leading-tight text-neutral-900 sm:text-xl">
                    {card.title}
                  </h3>

                  {/* Card Text */}
                  <p className="mt-4 whitespace-pre-line font-['Syne'] text-sm leading-7 text-neutral-600 sm:text-base">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatYouTakeBack;