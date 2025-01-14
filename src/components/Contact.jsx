import PropTypes from 'prop-types';
import { TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center mt-4 text-gray-600">
    {icon}
    <div className="ml-4 text-md tracking-wide font-semibold w-40">
      {text}
    </div>
  </div>
);

ContactInfo.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

const InputField = ({ label, type, name, id, placeholder }) => (
  <div className="flex flex-col mt-2">
    <label htmlFor={id} className="text-gray-600 font-semibold mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-100 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const TextAreaField = ({ label, name, id, placeholder, minLength }) => (
  <div className="flex flex-col mt-2">
    <label htmlFor={id} className="text-gray-600 font-semibold mb-2">
      {label}
    </label>
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      minLength={minLength}
      className="w-100 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
    ></textarea>
  </div>
);

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  minLength: PropTypes.number.isRequired,
};

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight text-center">
            Get in touch
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Contact Information Section */}
            <div className="p-6 bg-gray-100 sm:rounded-lg">
              <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Contact Information
              </p>
              <ContactInfo
                icon={
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                text="New Delhi, India"
              />
              <ContactInfo
                icon={
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
                text="+91 1234567890"
              />
              <ContactInfo
                icon={
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                text="XYZ@example.com"
              />
              <div className="mt-8">
                <p className="text-lg sm:text-xl font-medium text-gray-600">
                  Follow Me
                </p>
                <div className="flex mt-4 space-x-4">
                  <a
                    href="https://instagram.com/alsoshubham.here"
                    className="text-gray-500 hover:text-pink-400"
                  >
                    <TiSocialInstagram size={30} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alsoshubham/"
                    className="text-gray-500 hover:text-blue-400"
                  >
                    <TiSocialLinkedin size={30} />
                  </a>
                  <a
                    href="https://twitter.com/alsoshubham_"
                    className="text-gray-500 hover:text-blue-300"
                  >
                    <TiSocialTwitter size={30} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <form className="p-6 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Full Name"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                />
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <InputField
                label="Subject"
                type="text"
                name="subject"
                id="subject"
                placeholder="Reason for contacting"
              />
              <TextAreaField
                label="Message"
                name="message"
                id="message"
                placeholder="Explain your enquiry"
                minLength={200}
              />
              <button
                type="submit"
                className="md:w-32 bg-red-400 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
