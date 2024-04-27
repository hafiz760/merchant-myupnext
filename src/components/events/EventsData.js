import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { TbWorldLatitude } from "react-icons/tb";
import { GiWildfires } from "react-icons/gi";
import { MdFestival } from "react-icons/md";
import { BsSoundwave } from "react-icons/bs";
import { SiBandsintown } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { FaCalendarDay } from "react-icons/fa";
import { CgLastpass } from "react-icons/cg";
export const Publish = [
  {
    id: 1,
    icon: <MdOutlinePublishedWithChanges size={20} color="white" />,
    label: "Publish",
  },
];

export const EventTypes = [
  {
    id: 1,
    label: " Field Day",
    icon: <FaCalendarDay size={20} color="white" />,
  },
  {
    id: 2,
    label: " Glastonbury",
    icon: <CgLastpass size={20} color="white" />,
  },
  { id: 3, label: " Green Man", icon: <SiGreensock size={20} color="white" /> },
  {
    id: 4,
    label: " Latitude",
    icon: <TbWorldLatitude size={20} color="white" />,
  },
  {
    id: 5,
    label: " Boomtown",
    icon: <SiBandsintown size={20} color="white" />,
  },
  {
    id: 6,
    label: " Wilderness",
    icon: <GiWildfires size={20} color="white" />,
  },
  {
    id: 7,
    label: " Exit Festival",
    icon: <MdFestival size={20} color="white" />,
  },
  {
    id: 8,
    label: " Primavera Sound",
    icon: <BsSoundwave size={20} color="white" />,
  },
];
