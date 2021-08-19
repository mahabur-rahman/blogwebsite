import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const navbarSocialIcons = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    visit: "/",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    visit: "/",
  },
  {
    id: 3,
    icon: <FaPinterestSquare />,
    visit: "/",
  },
  {
    id: 4,
    icon: <FaTwitterSquare />,
    visit: "/",
  },
];

const listItems = [
  {
    id: 1,
    title: "Home",
    src: "/",
  },
  {
    id: 2,
    title: "About",
    src: "/about",
  },
  {
    id: 3,
    title: "Contact",
    src: "/contact",
  },
  {
    id: 4,
    title: "Write",
    src: "/write",
  },
  {
    id: 5,
    title: "Logout",
    src: "/logout",
  },
];

export { navbarSocialIcons, listItems };
