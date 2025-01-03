import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faDiscord, faTwitter, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

const resources = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
];

const followUs = [
  { name: "Github", href: "https://github.com/alsoshubham", icon: faGithub },
  { name: "Discord", to: "/" },
];

const legal = [
  { name: "Privacy Policy", to: "#" },
  { name: "Terms & Conditions", to: "#" },
];

const socialLinks = [
  { icon: faFacebook, label: "Facebook page" },
  { icon: faDiscord, label: "Discord community" },
  { icon: faTwitter, label: "Twitter page" },
  { icon: faGithub, label: "GitHub account" },
  { icon: faDribbble, label: "Dribbble account" },
];


FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string,
      href: PropTypes.string,
    })
  ).isRequired,
  isExternal: PropTypes.bool,
};

function FooterSection({ title, items, isExternal }) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{title}</h2>
      <ul className="text-gray-500 font-medium">
        {items.map((item, index) => (
          <li key={index} className="mb-4">
            {isExternal ? (
              <a href={item.href} className="hover:underline" target="_blank" rel="noreferrer">
                {item.name}
              </a>
            ) : (
              <Link to={item.to} className="hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterSection title="Resources" items={resources} />
            <FooterSection title="Follow us" items={followUs} isExternal />
            <FooterSection title="Legal" items={legal} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <a href="" className="hover:underline">
              AlsoShubham.co
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {socialLinks.map((link, index) => (
              <Link key={index} to="#" className="text-gray-500 hover:text-gray-900">
                <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                <span className="sr-only">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

