import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div>
      {/* TODO: add this into logo */}
      {/* <Link to="/"><img src="" alt="alsoShubham" /></Link> */}
      <h1 className="text-base lg:textxl font-bold tracking-wide">
        <em>AlsoShubham</em>
      </h1>
    </div>
  );
};

function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto py-8">
      <Title />
      <ul className="flex flex-row gap-8">
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
          <Link
            href="https://docs.google.com/document/d/1pSmGMPZFB_rkDTf8ZuQyA0rndie3So0G8RZ-uu0Dlv0/edit?usp=sharing"
            role="button"
            className="px-4 py-2 border-1 solid rounded-full bg-gradient-to-r from-purple-400 to-purple-600 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500"
          >
            Resume
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
