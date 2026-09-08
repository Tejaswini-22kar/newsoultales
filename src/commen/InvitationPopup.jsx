import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";
const InvitationPopup = ({ isOpen, onClose }) => {
  const [journey, setJourney] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-3 py-4 sm:px-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          max-h-[95vh]
          w-full
          max-w-[900px]
          overflow-y-auto
          bg-[#FCF8F5]
          px-5
          py-8
          sm:px-8
          sm:py-6
          md:px-6
          md:py-6
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-4
            text-2xl
            font-light
            text-neutral-900
            transition-transform
            duration-300
            hover:rotate-90
          "
          aria-label="Close"
        >
          ×
        </button>

        {/* Form */}
        <form className="pt-2">

          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8">

            {/* Name */}
            <div>
              <label
                className="
                  block
                  font-['Oswald']
                  text-2xl
                  font-medium
                  text-neutral-900
                  sm:text-2xl
                "
              >
                Name
              </label>

              <input
                type="text"
                className="
                  mt-4
                  w-full
                  border-0
                  border-b
                  border-neutral-900
                  bg-transparent
                  px-5
                  pb-4
                  text-base
                  outline-none
                  focus:border-neutral-900
                  focus:ring-0
                "
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="
                  block
                  font-['Oswald']
                  text-2xl
                  font-medium
                  text-neutral-900
                  sm:text-2xl
                "
              >
                Email
              </label>

              <input
                type="email"
                placeholder="Where we should write back"
                className="
                  mt-4
                  w-full
                  border-0
                  border-b
                  border-neutral-900
                  bg-transparent
                  px-5
                  pb-4
                  font-['Syne']
                  text-base
                  text-neutral-900
                  outline-none
                  placeholder:text-neutral-400
                  focus:border-neutral-900
                  focus:ring-0
                "
              />
            </div>

            {/* Phone */}
            <div>
              <label
                className="
                  block
                  font-['Oswald']
                  text-2xl
                  font-medium
                  text-neutral-900
                  sm:text-2xl
                "
              >
                Phone
              </label>

              <input
                type="tel"
                placeholder="For the call, when we get there"
                className="
                  mt-4
                  w-full
                  border-0
                  border-b
                  border-neutral-900
                  bg-transparent
                  px-5
                  pb-4
                  font-['Syne']
                  text-base
                  text-neutral-900
                  outline-none
                  placeholder:text-neutral-400
                  focus:border-neutral-900
                  focus:ring-0
                "
              />
            </div>

            {/* Journey */}
            <div>
              <label
                className="
                  block
                  font-['Oswald']
                  text-2xl
                  font-medium
                  text-neutral-900
                  sm:text-2xl
                "
              >
                Which Journey?
              </label>

              <div className="relative">
                <select
                  value={journey}
                  onChange={(e) => setJourney(e.target.value)}
                  className="
                    mt-4
                    w-full
                    appearance-none
                    border-0
                    border-b
                    border-neutral-900
                    bg-transparent
                    px-5
                    pb-4
                    font-['Syne']
                    text-base
                    text-neutral-900
                    outline-none
                    focus:border-neutral-900
                    focus:ring-0
                  "
                >
                  <option value="" disabled>
                    Help me choose
                  </option>

                  <option value="tirthan">
                    Tirthan Valley — 24–29 November 2026
                  </option>

                  <option value="other">
                    Another Journey
                  </option>
                </select>

                {/* Arrow */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-[14px]
                    text-3xl
                    font-light
                    text-neutral-900
                  "
                >
                  ↓
                </span>
              </div>
            </div>

          </div>

          {/* Message */}
          <div className="mt-4">
            <label
              className="
                block
                font-['Oswald']
                text-2xl
                font-medium
                text-neutral-900
                sm:text-2xl
              "
            >
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Which journey is calling you - or tell us what you're looking for, and we'll point you honestly."
              className="
                mt-4
                w-full
                resize-none
                border-0
                border-b
                border-neutral-900
                bg-transparent
                px-5
                pb-4
                font-['Syne']
                text-base
                leading-relaxed
                text-neutral-900
                outline-none
                placeholder:text-neutral-400
                focus:border-neutral-900
                focus:ring-0
              "
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                bg-[#111111]
                px-6
                py-3
                font-['Syne']
                text-base
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Request an Invitation

              <span
                className="
                  text-2xl
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>
          </div>

        </form>

        {/* Bottom Contact Information */}
        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-8
            border-t
            border-transparent
            pt-1
            sm:grid-cols-2
          "
        >

          {/* Email */}
          <div className="flex flex-col items-center text-center">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-neutral-900
              "
            >
              <Mail/>
            </div>

            <p
              className="
                mt-4
                font-['Oswald']
                text-lg
                font-medium
                text-neutral-900
                sm:text-xl
              "
            >
              preeti@soultales.in
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-neutral-900
              "
            >
              <MapPin/>
            </div>

            <p
              className="
                mt-4
                font-['Oswald']
                text-lg
                font-medium
                text-neutral-900
                sm:text-xl
              "
            >
              Pune, Maharashtra 411038
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvitationPopup;