import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faChevronDown,
  faBars,
  faEnvelope,
  faHome,
  faContactBook,
  faUser,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faServicestack,
  faFlutter,
} from "@fortawesome/free-brands-svg-icons";

export { CgSoftwareDownload } from "react-icons/cg";
export { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
export {
  FaRocket,
  FaCalendarAlt,
  FaStar,
  FaLightbulb,
  FaClock,
  FaCheckCircle,
  FaMobileAlt,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
export { HiDeviceMobile } from "react-icons/hi";
export { BiCodeAlt } from "react-icons/bi";

type FaIconProps = { className?: string };

export const Fa6Moon = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faMoon} className={className} />
);
export const Fa6Sun = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faSun} className={className} />
);
export const Fa6ChevronDown = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faChevronDown} className={className} />
);
export const Fa6Bars = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faBars} className={className} />
);
export const Fa6Envelope = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faEnvelope} className={className} />
);
export const Fa6Home = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faHome} className={className} />
);
export const Fa6ContactBook = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faContactBook} className={className} />
);
export const Fa6User = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faUser} className={className} />
);
export const Fa6Brain = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faBrain} className={className} />
);
export const Fa6Whatsapp = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faWhatsapp} className={className} />
);
export const Fa6Linkedin = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faLinkedin} className={className} />
);
export const Fa6Github = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faGithub} className={className} />
);
export const Fa6Servicestack = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faServicestack} className={className} />
);
export const Fa6Flutter = ({ className }: FaIconProps): JSX.Element => (
  <FontAwesomeIcon icon={faFlutter} className={className} />
);
