import React, { useEffect, useRef, useState } from "react";

import heroimg from "../src/assets/heroimg.webp";
import sectionImg from "../src/assets/sectionimg.webp";

import SixDays from "./commen/SixDays";
import WhatYouTakeBack from "./commen/WhatYouTakeBack";
import WhatThisIsNot from "./commen/WhatThisIsNot";
import EverythingYouNeedToKnow from "./commen/EverythingYouNeedToKnow";
import InvitationPopup from "./commen/InvitationPopup";
import {MoveRight} from "lucide-react"
import PreetiSection from "./commen/PreetiSection";
import Hero from "./commen/Hero";
 

const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          
          // Animation will NOT repeat when scrolling back
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};



export default function Home() {
   

  const [holdsRef, holdsVisible] = useInView(0.2);
const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [anotherYearRef, anotherYearVisible] = useInView(0.2);

  return (
    <div className="w-full">

    

      <Hero/>

     

      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">

          <p className="font-['Syne'] text-sm sm:text-lg">
            The Tirthan runs past loud enough that you stop trying to think
            over it. The Great Himalayan National Park begins where the road
            gives up. Wooden temples stand in villages nobody has rearranged
            for photographs.

            <br />

            By four in the afternoon in late November there is woodsmoke in
            the air, the light goes thin and clear, and it is cold enough
            that a fire becomes the obvious place to sit. No queues. No
            sights to tick. River, forest, village, sky.
          </p>

          <h2
            className="
              mt-4
              font-['Oswald']
              text-2xl
              font-semibold

              sm:text-3xl
              md:mt-2
              md:text-4xl
            "
          >
            Six days here. One question: what happens when it finally goes
            quiet?
          </h2>

        </div>
      </section>

       

     <section
  ref={holdsRef}
  className="w-full bg-white px-4 sm:px-8 md:px-20"
>
  <div className="mx-auto grid grid-cols-12 gap-4 md:gap-6">

    <div
      className={`
        col-span-12
        h-[320px]
        overflow-hidden

        sm:h-[420px]

        md:col-span-5
        md:h-[677px]

        opacity-0

        ${
          holdsVisible
            ? "animate-[fromLeft_1s_ease-out_both]"
            : ""
        }
      `}
      style={{
        animationDelay: "0.2s",
      }}
    >
      <img
        src="sectionimg.webp"
        alt="Mountain sunset"
        className="h-full w-full object-cover"
      />
    </div>

    <div
      className={`
        col-span-12
        flex
        flex-col
        items-center
        justify-center
        bg-[#f7f0ea]
        px-6
        py-10
        text-center

        sm:px-8

        md:col-span-7
        md:px-10

        opacity-0

        ${
          holdsVisible
            ? "animate-[fromRight_1s_ease-out_both]"
            : ""
        }
      `}
      style={{
        animationDelay: "0.5s",
      }}
    >
      <h2
        className="
          mb-6
          font-['Oswald']
          text-2xl
          font-semibold
          text-neutral-900

          sm:text-3xl
          md:text-4xl
        "
      >
        You Are The One Who Holds It.
      </h2>

      <p
        className="
          mb-6
          font-['Syne']
          text-base
          font-medium
          leading-relaxed
          text-[#141313]

          sm:text-lg
        "
      >
        At work, they bring you the thing nobody else can fix. At home,
        you are the one who knows where everything is kept, which
        forms are due, who is not doing well this month. Your parents
        call you first. Your team calls you first. Somebody in your
        family has a health thing, and you are managing it.
      </p>

      <p
        className="
          mb-6
          font-['Syne']
          text-lg
          font-bold
          text-neutral-900

          sm:text-xl
        "
      >
        You are good at all of it. That is precisely the difficulty.
      </p>

      <p
        className="
          mb-6
          font-['Syne']
          text-base
          font-medium
          leading-relaxed
          text-[#141313]

          sm:text-lg
        "
      >
        Ask you what you want for dinner, and you will ask what
        everybody else wants. It is not a big thing. It is just that
        somewhere in the last few years, the person who was doing all
        the holding got put down somewhere and never quite picked back
        up.

        <br />

        That does not announce itself. It arrives as sleep that isn't
        rest. A shorter fuse with the people you love most and the
        longest patience for people who don't matter. Sunday evenings
        that feel heavier than they should. Being told you're doing
        amazingly by people who have no idea.
      </p>

     <button
  onClick={() => setIsInvitationOpen(true)}
  className="
    group
    relative
    flex
    items-center
    gap-2
    overflow-hidden
    font-['syne']
    rounded-full
    border
    border-neutral-900
    px-6
    py-3
    text-base
    font-medium
    text-neutral-900
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
    </div>
  </div>
</section>
      

      <section
        ref={anotherYearRef}
        className="mt-20 bg-[#f7f0ea] py-20"
      >
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">

          <h2
            className={`
              mb-6
              font-['Oswald']
              text-4xl
              font-semibold
              text-neutral-900

              sm:text-5xl
              md:text-4xl

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[headingFromLeft_1s_cubic-bezier(.65,0,.35,1)_both]"
                  : ""
              }
            `}
          >
            Another year of this.
          </h2>

          <p
            className={`
              mb-3
              font-['Syne']
              text-lg
              font-medium
              leading-relaxed
              text-[#141313]

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                  : ""
              }
            `}
            style={{ animationDelay: "0.2s" }}
          >
            Not a crisis. That’s the thing about it - there’s no crisis.
            You’ll be fine.
          </p>

          <p
            className={`
              mb-3
              font-['Syne']
              text-lg
              font-medium
              leading-relaxed
              text-[#141313]

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                  : ""
              }
            `}
            style={{ animationDelay: "0.35s" }}
          >
            You’ll be fine next November too. The calendar will look roughly
            the way it looks now. The same people will need the same things.
            There will be a new version of the thing that’s currently taking
            up most of your head, and you’ll handle that one as well.
          </p>

          <p
            className={`
              mb-3
              font-['Syne']
              text-lg
              font-medium
              leading-relaxed
              text-[#141313]

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                  : ""
              }
            `}
            style={{ animationDelay: "0.5s" }}
          >
            What changes, quietly, is the margin.
          </p>

          <p
            className={`
              mb-3
              font-['Syne']
              text-lg
              font-medium
              leading-relaxed
              text-[#141313]

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                  : ""
              }
            `}
            style={{ animationDelay: "0.65s" }}
          >
            The fuse is a little shorter than it was two years ago, and
            shortest with the two or three people you would say you love most.
            That’s the part nobody tells you: the patience goes to the people
            who don’t matter, and the sharpness goes home. You have started
            to hear it in your own voice, and you have started to apologise
            for it more often.
          </p>

          <p
            className={`
              mb-3
              font-['Syne']
              text-lg
              font-medium
              leading-relaxed
              text-[#141313]

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                  : ""
              }
            `}
            style={{ animationDelay: "0.8s" }}
          >
            Your body has been sending small notices. You have been filing
            them.
          </p>

          <p
            className={`
              mb-3
              font-['Syne']
              text-lg
              font-medium
              leading-relaxed
              text-[#141313]

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                  : ""
              }
            `}
            style={{ animationDelay: "0.95s" }}
          >
            And your own preferences have quietly gone out of use. Somebody
            asks what you feel like eating, and there’s genuinely nothing
            there. Not sacrifice - just a muscle that stopped being needed
            and got weaker, the way muscles do.
          </p>

          <p
            className={`
              mb-3
              font-['Syne']
              text-lg
              font-medium
              leading-relaxed
              text-[#141313]

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                  : ""
              }
            `}
            style={{ animationDelay: "1.1s" }}
          >
            You will keep going. You are extremely good at keeping going.
            That has never been in question.
          </p>

          <p
            className={`
              mb-3
              font-['Syne']
              text-lg
              font-medium
              leading-relaxed
              text-[#141313]

              opacity-0

              ${
                anotherYearVisible
                  ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                  : ""
              }
            `}
            style={{ animationDelay: "1.25s" }}
          >
            The only real question is what it will have cost by the time
            somebody finally makes you stop - and whether it happens on a
            date you chose, or one you didn’t.
          </p>

        </div>

      

        <div
          className={`
            mt-16
            bg-white
            opacity-0

            ${
              anotherYearVisible
                ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                : ""
            }
          `}
          style={{ animationDelay: "1.4s" }}
        >
          <h1
            className="
              py-6
              text-center
              font-['Oswald']
              text-[28px]
              font-medium
            "
          >
            Six days is 1.6% of a year.
          </h1>
        </div>
      </section>

     

      <SixDays />

      <WhatYouTakeBack />

      <WhatThisIsNot />

<PreetiSection/>
      <EverythingYouNeedToKnow />

       

     
<InvitationPopup
  isOpen={isInvitationOpen}
  onClose={() => setIsInvitationOpen(false)}
/>
    </div>
  );
}