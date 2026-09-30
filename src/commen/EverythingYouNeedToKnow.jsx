import React, { useState } from "react";

const EverythingYouNeedToKnow = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Dates And Location",
      content:
        "24–29 November 2026. Six days, five nights. Tirthan Valley, Himachal Pradesh, at the edge of the Great Himalayan National Park.",
    },
    {
      title: "The Circle",
      content:
        "Twenty people, most arriving alone. Ages typically range from early thirties to mid fifties. Everyone is holding something - a role, a family, a business - and most have not had a real conversation about it in years.",
    },
    {
      title: "What It Costs",
      content:
        "Details are shared on the invitation call, once we know it is the right fit on both sides. This is not a mass-market retreat, and pricing reflects that.",
    },
    {
      title: "What It Includes",
      content:
        "Accommodation, all meals, all sessions and practices, transfers within the valley, and the twelve months of follow-up afterward. Flights to Delhi and personal expenses are not included.",
    },
    {
      title: "Getting There",
      content:
        "Fly into Delhi or Chandigarh, then a scenic drive into the valley. Full transfer details and a suggested travel itinerary are sent once you're confirmed.",
    },
    {
      title: "How This Works",
      content:
        "You request an invitation. We get on a short call to make sure this is the right room for you. If it is, you're in. If it isn't, we'll tell you honestly, and that's the end of it.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20 mx-auto max-w-[1400px] ">
      <div className="mx-auto px-4 sm:px-10 md:px-16 lg:px-28">

        {/* Heading */}
        <h2 className="mb-11 text-center font-['Oswald'] text-2xl font-bold text-neutral-900 sm:text-3xl">
          Everything You Need To Know.
        </h2>

        {/* Accordion */}
        <div className=" ">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-neutral-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="font-['Oswald'] text-sm font-bold   tracking-wide text-neutral-900 sm:text-2xl">
                    {item.title}
                  </span>

                  <span
                    className={`ml-4 shrink-0 text-xl font-light text-neutral-900 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-96 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pr-8 text-sm leading-relaxed text-neutral-600 font-[syne]">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EverythingYouNeedToKnow;