import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
export default function About() {
  const navigate = useNavigate();
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 my-10 md:my-20">
      <div className="text-white">
        <h1 className=" heading flex justify-center pb-28 text-3xl md:text-4xl mb-4 font-bold">About Me</h1>
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/133507548?s=400&u=064bdc851b32056353195e216032a4cb5ee4d338&v=4"
              alt="Profile"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#ffffff] font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-[#ffffff] font-normal">
            I am a passionate Full Stack Developer, crafting digital solutions. My journey in tech started with a curiosity about how things work on the web, and it has evolved into a professional career building robust and scalable applications.
            </p>
            <br />
            <div className="grid grid-cols-2 gap-4 mb-8 font-normal text-[#ffffff]">
              <div className="flex items-center">
                <span className="text-green-500 mr-2"><FaCheck /></span>
                <span>Web Development</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2"><FaCheck /></span>
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2"><FaCheck /></span>
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2"><FaCheck /></span>
                <span>Strategic Designs</span>
              </div>
            </div>
            <div className="grid grid-col-2 gap-4 text-[#ffffff] mb-8 text-start">
              <div ><p>workwithalsoshubham@gmail.com</p></div>
              <div ><p>New Delhi</p></div>
              <div ><p>Contact for availability for freelance</p></div>
            </div>
            <button className="px-6 py-3 w-full sm:w-fit border-1 solid rounded-md mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 "
          onClick={() => navigate('/contact')}>Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
