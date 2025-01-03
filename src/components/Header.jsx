// import { Link, NavLink } from "react-router-dom";
// export default function Header() {
//   return (
//     <header className="shadow sticky z-50 top-0">
//       {/* navbar column  */}
//       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl frame-fill position-relative">
//           <div className="flex flex-wrap mx-auto max-w-screen-xl">
//             <Link to="/" className="flex items-center">
//               <img
//                 src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                 className="mr-3 h-12"
//                 alt="Logo"
//               />
//             </Link>
//           </div>
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 border-b ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 border-b ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   About
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 border-b ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Contact us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/Projects"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 border-b ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Projects
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }


import { Link } from "react-router-dom"
const Title = () => {
  return(
    <div>
      <Link to="/"><img src="" alt="alsoShubham" /></Link>
    </div>
  );
};

function Header () {
  return (
    <div>
      <div className="header flex justify-evenly">
        <Title/>
        <div className="flex">
          <nav>
            <ul className="flex justify-around gap-5">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header