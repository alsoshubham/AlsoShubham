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
      <div className="header flex justify-between items-center px-6 py-4">
        <Title/>
        <div className="flex items-center">
            <ul className="flex gap-5">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button className="px-4 py-2 border-1 solid rounded-full bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500">
                  <a href="https://docs.google.com/document/d/1pSmGMPZFB_rkDTf8ZuQyA0rndie3So0G8RZ-uu0Dlv0/edit?usp=sharing">Resume</a>
                </button>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};
export default Header