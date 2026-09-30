import React, { useEffect, useState } from "react";
import heroimg from "../assets/heroimg.webp"; // adjust path as needed
import { MoveRight } from "lucide-react";
import InvitationPopup from "./InvitationPopup";
const Hero = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = heroimg;

    // If it's already cached, this fires immediately
    if (img.complete) {
      setImgLoaded(true);
    } else {
      img.onload = () => setImgLoaded(true);
    }

    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <section
      className="
        relative
        
        h-screen
        min-h-[500px]
        w-full
        overflow-hidden
        bg-cover
        bg-top
        bg-no-repeat
        bg-[#0c0c0c]
      "
    >
      {/* Background image layer — fades in only once loaded */}
      <div
        className={`
          absolute inset-0
         
          bg-cover bg-top bg-no-repeat
          transition-opacity duration-[1200ms] ease-out
          ${imgLoaded ? "opacity-100" : "opacity-0"}
        `}
        style={{ backgroundImage: `url(${"/heroimg.webp"})` }}
      />

      {/* Optional dark overlay so text is legible even before/after fade */}
      <div className="absolute inset-0 bg-black/20" />

      {imgLoaded && (
        <>
          <div
            className="
              absolute
              left-1/2
              top-[42%]
              z-30
              w-full
              -translate-x-1/2
              -translate-y-1/2
              px-4
              text-center
            "
          >
           {/* Desktop / tablet: TRUENORTH */}
<h1
  className="
    m-0
    hidden
    sm:inline-block
    font-['Oswald']
    font-black
    leading-none
    tracking-[0.05em]
    text-[#f4f6f4]
    uppercase

    sm:text-[90px]
    sm:tracking-[0.07em]

    md:text-[140px]

    lg:text-[220px]
    lg:tracking-[0.09em]

   [mask-image:linear-gradient(180deg,black_0%,black_76%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(180deg,black_56%,black_60%,transparent_89%)]
    animate-[headingReveal_1.4s_cubic-bezier(.65,0,.35,1)_both]
  "
>
  TRUE NORTH
</h1>

{/* Mobile: TRUE / NORTH stacked, gradient fades from NORTH up into TRUE */}
{/* Mobile: TRUE / NORTH stacked, each word has its own bottom fade */}
<h1
  aria-label="True North"
  className="
    m-0
    block
    sm:hidden
    font-['Oswald']
    text-[96px]
    font-black
    leading-[1.2]
    tracking-[0.05em]
    text-[#f4f6f4]
    uppercase

    animate-[headingReveal_1.4s_cubic-bezier(.65,0,.35,1)_both]
  "
>
  <span
    className="
      block
         [mask-image:linear-gradient(180deg,black_0%,black_76%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(180deg,black_56%,black_60%,transparent_89%)]
    "
  >
    TRUE
  </span>
  
  <span
    className="
      block
     [mask-image:linear-gradient(180deg,black_0%,black_76%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(180deg,black_56%,black_60%,transparent_89%)]
    "
  >
    NORTH
  </span>
</h1>
          </div>

          <div
            className="
              absolute
              bottom-[6%]
              left-0
              right-0
              z-40
              flex
              flex-col
              items-center
              px-4
              text-center
              font-['Oswald']
              text-[#f4f6f4]

              sm:bottom-[7%]

              animate-[bottomContentReveal_1.2s_ease-out_1.1s_both]
            "
          >
            <p
              className="
                m-0
                text-center
                text-xl
                font-semibold
                tracking-[0.01em]

                sm:text-2xl
                md:text-4xl
              "
            >
              Tirthan Valley, Himachal Pradesh
            </p>

            <p
              className="
                m-0
                mt-3
                text-center
                font-['Poppins']
                text-xs
                font-medium
                italic
                tracking-wide

                sm:text-sm
              "
            >
              24–29 November 2026 · Six days, five nights · Twenty people
            </p>

            <p
              className="
                m-0
                mt-3
                text-center
                font-['Poppins']
                text-sm
                font-medium
                tracking-wide

                sm:text-base
              "
            >
              Six days for people who hold everything.
            </p>

            <button
              onClick={() => setIsInvitationOpen(true)}
              className="
                group
                relative
                mt-6
                overflow-hidden
                rounded-full
                bg-white
 00               px-7
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
                  cl0a0ssName="
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
        </>
      )}

      <InvitationPopup
  isOpen={isInvitationOpen}
  onClose={() => setIsInvitationOpen(false)}
/>
    </section>
  );
};

export default Hero;