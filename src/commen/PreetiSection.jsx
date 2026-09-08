import React, { useEffect, useRef, useState } from "react";
import preeti from "../assets/preeti.webp";


const PreetiSection = () => {
  const [imageVisible, setImageVisible] = useState(false);
  const [boxVisible, setBoxVisible] = useState(false);

  const imageRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const targets = [
      { ref: imageRef, setter: setImageVisible },
      { ref: boxRef, setter: setBoxVisible },
    ];

    const observers = targets.map(({ ref, setter }) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section className="w-full">
      <div className="relative w-full">

        {/* Background Image */}
       <img
  ref={imageRef}
  src={preeti}
  alt="Preeti Toraskar"
  className={`h-[420px] w-full object-cover object-center sm:h-[500px] md:h-[600px] lg:h-[680px] ${
    imageVisible ? "animate-[slowFade_1.8s_ease-out_both]" : "opacity-0"
  }`}
/>

        {/*
          Mobile / tablet (< md): box sits BELOW the image,
          pulled up with a negative margin so it overlaps
          the bottom half of the image.

          Desktop (md+): reverts to the original left-side
          overlay, vertically centered on the image.
        */}
        <div
          className="
            relative
            -mt-16
            flex
            justify-center
            px-4

            sm:-mt-20
            sm:px-8

            md:absolute
            md:inset-y-0
            md:left-0
            md:mt-0
            md:justify-start
            md:px-0
          "
        >
          <div
            ref={boxRef}
            className={`
              w-full
              max-w-md
              bg-white
              p-6
              shadow-lg

              sm:p-8

              md:my-auto
              md:ml-8
              md:max-w-lg
              md:p-10
              lg:ml-20

              ${
                boxVisible
                  ? "animate-[fromLeft_1.8s_ease-out_0.35s_both]"
                  : "opacity-0"
              }
            `}
          >
            <h2 className="mb-4 font-['Oswald'] text-2xl font-bold text-neutral-900 sm:text-3xl ">
              Preeti Toraskar Leads This Journey.
            </h2>

            <div className="space-y-3 text-sm leading-relaxed text-neutral-700  font-[syne]">
              <p>
                Not a coach. Not a guru. Someone who knows the ground and
                walks it beside you.
              </p>

              <p>
                She spent eighteen years designing physical spaces -
                offices, homes, the rooms where people spend their lives -
                before concluding that the spaces most people needed were
                not physical ones.
              </p>

              <p>
                She holds a Master's in Expressive Movement Therapy, which
                covers movement, art, music and drama, and has been a
                certified yoga teacher since 2011. She has trained under Dr
                Daniel Siegel, and studied at Oxford with Bessel van der
                Kolk, Esther Perel and Richard Schwartz.
              </p>

              <p>
                For four years, she has run these journeys privately, by
                invitation. Nine of them. Half the people who came, came
                back.
              </p>

              <p>
                True North is the first one she is opening beyond that
                circle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreetiSection;