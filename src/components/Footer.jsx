// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

// const resources = [
//   { name: "Home", to: "/" },
//   { name: "About", to: "/about" },
// ];

// const followUs = [
//   { name: "Github", href: "https://github.com/alsoshubham", icon: FaGithub },
//   { name: "Discord", to: "/" },
// ];

// const legal = [
//   { name: "Privacy Policy", to: "#" },
//   { name: "Terms & Conditions", to: "#" },
// ];

// FooterSection.propTypes = {
//   title: PropTypes.string.isRequired,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       to: PropTypes.string,
//       href: PropTypes.string,
//     })
//   ).isRequired,
//   isExternal: PropTypes.bool,
// };

// function FooterSection({ title, items, isExternal }) {
//   return (
//     <div>
//       <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{title}</h2>
//       <ul className="text-gray-500 font-medium">
//         {items.map((item, index) => (
//           <li key={index} className="mb-4">
//             {isExternal ? (
//               <a href={item.href} className="hover:underline" target="_blank" rel="noreferrer">
//                 {item.name}
//               </a>
//             ) : (
//               <Link to={item.to} className="hover:underline">
//                 {item.name}
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function Footer() {
//   return (
//     <footer className="bg-white border-y">
//       <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
//         <div className="md:flex md:justify-between">
//           <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
//             <FooterSection title="Resources" items={resources} />
//             <FooterSection title="Follow us" items={followUs} isExternal />
//             <FooterSection title="Legal" items={legal} />
//           </div>
//         </div>
//         <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
//         <div className="sm:flex sm:items-center sm:justify-between">
//           <span className="text-sm text-gray-500 sm:text-center">
//             © 2024
//             <a href="" className="hover:underline">
//               alsoShubham.co
//             </a>
//             . All Rights Reserved.
//           </span>
//           <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
//             <Link to="#" className="text-gray-500 hover:text-gray-900">
//               <FaFacebook className="w-4 h-4" />
//             </Link>
//             <Link to="#" className="text-gray-500 hover:text-gray-900">
//               <FaDiscord className="w-4 h-4" />
//             </Link>
//             <Link to="#" className="text-gray-500 hover:text-gray-900">
//               <FaTwitter className="w-4 h-4" />
//             </Link>
//             <Link to="#" className="text-gray-500 hover:text-gray-900">
//               <FaGithub className="w-4 h-4" />
//             </Link>
//             <Link to="#" className="text-gray-500 hover:text-gray-900">
//               <FaDribbble className="w-4 h-4" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { FaInstagram, FaLinkedinIn , FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { FiMail } from "react-icons/fi";

function footer() {
  return (
    <div className="footer px-16">
      <div className="container grid grid-col-2 gap-2 md:grid-cols-4 py-16">
        <div>
          <h2 className="text-base text-start lg:textxl font-bold tracking-wide mb-2">
            <em>AlsoShubham</em>
          </h2>
          <p className="text-start">
            Crafting digital experiences with clean code and creative solutions.
            Available for freelance opportunities.
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://instagram.com/alsoshubham.here"
              className="text-gray-500 hover:text-pink-400"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/alsoshubham/"
              className="text-gray-500 hover:text-blue-400"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://twitter.com/alsoshubham_"
              className="text-gray-500 hover:text-blue-300"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="text-left">
          <h2 className="font-semibold font-sans">Quick Links</h2>
          <ul className="gap-4">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="font-semibold font-sans">Services</h2>
          <ul className="gap-4">
            <li>
              <Link to="/contact">Web Development</Link>
            </li>
            <li>
              <Link to="/contact">Mobile Development</Link>
            </li>
            <li>
              <Link to="/contact">UI/UX Design</Link>
            </li>
            <li>
              <Link to="/contact">UX Strategies</Link>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="font-semibold font-sans">Contact Info</h2>
          <ul className="">
            <li className="flex items-center gap-2">
              <TfiLocationPin />
              New Delhi, Delhi, India
            </li>
            <li className="flex items-center gap-2">
              <FiMail />
              workwithalsoshubham@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="sm:flex sm:items-center sm:justify-between pt-6">
        <span className="text-sm sm:text-center text-white">
          © 2024 {" "}
          <a href="" className="hover:underline">
            alsoShubham.co
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <Link to="https://x.com/alsoshubham_" className="text-white hover:text-blue-500">
            <FaTwitter className="w-4 h-4" />
          </Link>
          <Link to="https://www.instagram.com/alsoshubham.here/" className="text-white hover:text-pink-400">
            <FaInstagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default footer;
