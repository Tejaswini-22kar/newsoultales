import React from "react";
import day1 from "../assets/day1.webp";
import day2 from "../assets/day2.webp";
import day3 from "../assets/day3.webp";
import day4 from "../assets/day4.webp";
import day5 from "../assets/day5.webp";
import day6 from "../assets/day6.webp";

const days = [
  {
    img: day1,
    label: "DAY 01",
    title: "Arrive",
    position: "object-center",
    paras: [
      "An hour up from Bhuntar and the road narrows until it is following the river. You arrive in the afternoon. Tea, a room, time to put things down.",
      "That evening the first circle, and then dinner with other people you have not met, chosen carefully so the room holds. Nobody asks what you do for a living. It is a strange relief, and it takes most people about an hour to stop reaching for the answer anyway.",
    ],
  },
  {
    img: day2,
    label: "DAY 02",
    title: "Slow",
    position: "object-center",
    paras: [
      "Mornings begin in circle. Not sharing for the sake of it - a specific piece of work each day, done together. Today is about the yes. The one that leaves your mouth before you have decided anything. Where you learned it, who it was for, and what it has cost to keep saying it.",
      "Then the valley, at walking pace. A village, a temple older than any building you have stood in. The afternoon is unstructured, and that is deliberate. Most people find the first empty afternoon harder than a climb.",
    ],
  },
  {
    img: day3,
    label: "DAY 03",
    title: "Say",
    position: "object-center",
    paras: [
      "There is a morning where you say the thing out loud to someone who is not in the room. It sounds odd written down. It is not odd when it happens. People have been carrying a sentence for eleven years, sometimes twenty, and there has never been a safe place to put it down. Here there is, and there are fifteen people who will not flinch when you do. The afternoon is left long and quiet on purpose. In the evening, fire.",
    ],
  },
  {
    img: day4,
    label: "DAY 04",
    title: "Alone",
    position: "object-center",
    paras: [
      "A morning by yourself at the water. No phone, no book, no task. A few hours in which nobody requires anything of you at all. Most people expect this to be the easy day. It is usually the one they still talk about two years later. Something arrives when there is nothing left to manage, and it does not tend to arrive any other way. We gather again in the evening. You say what you want to say, or you say nothing.",
    ],
  },
  {
    img: day5,
    label: "DAY 05",
    title: "Gather",
    position: "object-center",
    paras: [
      "Local food, cooked by people from this valley, eaten together. Not a demonstration and not a cultural programme. You eat what they eat. There is a particular thing that happens when you are fed by people who want nothing from you. It is difficult to describe in advance, and most people go quiet afterwards. In the afternoon, one thing to take home. A single practice, small enough that you will still be doing it in February. The last evening circle runs long. The fire stays lit.",
    ],
  },
  {
    img: day6,
    label: "DAY 06",
    title: "Carry",
    position: "object-bottom",
    paras: [
      "Early, by the water, before the valley wakes. The closing. Everyone names one thing they are taking back and one thing they are leaving in Tirthan. Said out loud, in front of the people who were there. It takes about forty minutes and it is the part nobody forgets. Breakfast. Then the drive down. You will not be a different person by Thursday. That is not the promise. But you will have somewhere to stand, and one or two things you did not know a week ago that will be difficult to un-know.",
    ],
  },
];

const SixDays = () => {
  return (
    <>
      {days.map((d) => (
        <section
          key={d.label}
          className="w-full bg-white px-6 pb-12 md:px-20"
        >
          {/* Image container: max width + fixed height */}
          <div className="group relative mx-auto max-w-[1400px] overflow-hidden">
            <img
              src={d.img}
              alt={d.label}
              className={`
                block
                w-full
                h-[260px]
                sm:h-[360px]
                md:h-[460px]
                lg:h-[560px]
                object-cover
                ${d.position}
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              `}
            />
          </div>

          {/* Day badge */}
          <div className="relative z-10 mx-auto -mt-7 flex h-20 w-20 items-center justify-center rounded-full bg-black text-center text-lg font-['Oswald'] font-semibold text-white ring-4 ring-white">
            {d.label}
          </div>

          {/* Content */}
          <div className="mx-auto max-w-[1200px] text-center">
            <h2 className="mt-3 font-['Oswald'] text-4xl font-bold">
              {d.title}
            </h2>

            {d.paras.map((p, i) => (
              <p
                key={i}
                className="mt-2 text-lg leading-relaxed text-[#6B6666] font-['Syne']"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default SixDays;