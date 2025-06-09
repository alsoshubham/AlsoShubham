/* eslint-disable react/no-unescaped-entities */
import { FaCheck } from "react-icons/fa6";
export default function About() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 my-10 md:my-20">
      <div className="text-white">
        <h1 className=" heading flex justify-center text-3xl md:text-4xl mb-4 font-bold">
          About Me
        </h1>
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              className="rounded-full"
              src="https://media.licdn.com/dms/image/v2/D4D03AQFJ8e-tRb_EAQ/profile-displayphoto-shrink_400_400/B4DZXJ5lAQG4Ag-/0/1742849070378?e=1755129600&v=beta&t=t0RAfAdQGsO0Vk8hFAmzPlMU0JxUyyTup_ZbCZCLuxA"
              alt="Shubham's profile picture"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12 space-y-4">
            <p className="mt-6 text-[#ffffff] font-normal text-start text-lg md:text-xl leading-relaxed">
              I'm the co-founder of taxesnotice, Ecom - Skyn globals, Ex-Neenva, Stealth and many, also a builder passionate about solutions that solve
              real problems. <br />
              With experience leading and launching 0→1 products, I operate at
              the intersection of Product Strategy, UX Design, and Software
              Engineering — delivering both velocity and clarity to early-stage
              startups.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-base">
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-400" />
                <span>Figuring out users need.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-400" />
                <span>Distilling those needs into lean MVPs.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-400" />
                <span>Building products that users love.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
