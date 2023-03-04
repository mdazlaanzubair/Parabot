import { Link } from "react-router-dom";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const links = [
    {
      path: "/",
      text: "Home",
      icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
    {
      path: "/about",
      text: "About",
      icon: "M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25",
    },
    {
      path: "/summarizer",
      text: "Summarizer",
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    },
  ];

  return (
    <ul
      className={`menu menu-horizontal lg:menu-vertical ${
        isMenuOpen ? "block" : "hidden"
      } shadow-xl bg-neutral text-neutral-content rounded-box absolute top-24 right-5`}
    >
      {links.map((link, index) => (
        <li key={index}>
          <Link
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            to={link.path}
            data-tip={link.text}
            className="tooltip tooltip-primary p-5 tooltip-top lg:tooltip-left text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={link.icon}
              />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
