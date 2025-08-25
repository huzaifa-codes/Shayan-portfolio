import React from "react";
import SectionWrapper from "../shared/ui/SectionWrapper";

const Footer: React.FC = () => {
  return (
    <SectionWrapper>
      <section className="bg-gray-100 py-16 px-6 mt-28 text-gray-900 rounded-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section (Text) */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
              See if Designjoy is the right fit for you <br />
              <span className="italic text-gray-700">(it totally is)</span>
            </h1>
            <p className="text-[20px] text-gray-700 font-perah">
              Schedule a quick, 15 minute guided tour through Designjoy.
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-200 p-6 sm:p-8 rounded-lg text-left">
            <form className="space-y-6">
              <div>
                <label className="block text-lg mb-1 font-medium">
                  Your name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md bg-white"
                />
              </div>

              <div>
                <label className="block text-lg mb-1 font-medium">
                  Email address *
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md bg-white"
                />
              </div>

              <div>
                <label className="block text-lg mb-1 font-medium">
                  What is this meeting about? *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md bg-white"
                />
              </div>

              <div>
                <label className="block text-lg mb-1 font-medium">
                  Additional notes
                </label>
                <textarea
                  className="w-full border border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md bg-white"
                  rows={4}
                  placeholder="Please share anything that will help prepare for our meeting."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="addGuests" />
                <label htmlFor="addGuests" className="text-sm">
                  Add guests
                </label>
              </div>

              <p className="text-sm text-gray-600">
                By proceeding, you agree to our{" "}
                <a href="#" className="underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="text-sm text-gray-700 underline"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 text-sm font-semibold rounded-md"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Footer;
