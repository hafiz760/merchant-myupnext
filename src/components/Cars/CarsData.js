import { MdDirectionsCar, MdLocalShipping } from "react-icons/md";
import { MdRadio, MdPower, MdSettings, MdSpeed } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { PiSteeringWheel } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa";

export const carTypesData = [
  {
    id: 1,
    label: "Convertibles",
    icon: <MdDirectionsCar size={20} color="white" />,
  },
  {
    id: 2,
    label: "Coupes",
    icon: <MdDirectionsCar size={20} color="white" />,
  },
  {
    id: 3,
    label: "Hatchbacks",
    icon: <MdDirectionsCar size={20} color="white" />,
  },
  {
    id: 4,
    label: "Minivans",
    icon: <MdLocalShipping size={20} color="white" />,
  },
  {
    id: 5,
    label: "Sedan",
    icon: <MdDirectionsCar size={20} color="white" />,
  },
  {
    id: 6,
    label: "SUVs",
    icon: <MdLocalShipping size={20} color="white" />,
  },
  {
    id: 7,
    label: "Trucks",
    icon: <FaTruckMoving size={20} color="white" />,
  },
  {
    id: 8,
    label: "Wagons",
    icon: <MdLocalShipping size={20} color="white" />,
  },
];

export const carFeaturesData = [
  {
    id: 1,
    label: "Airbag",
    icon: <SiAdguard size={20} color="white" />,
  },
  {
    id: 2,
    label: "FM Radio",
    icon: <MdRadio size={20} color="white" />,
  },
  {
    id: 3,
    label: "Power Windows",
    icon: <MdPower size={20} color="white" />,
  },
  {
    id: 4,
    label: "Sensor",
    icon: <MdSettings size={20} color="white" />,
  },
  {
    id: 5,
    label: "Speed Km",
    icon: <MdSpeed size={20} color="white" />,
  },
  {
    id: 6,
    label: "Steering Wheel",
    icon: <PiSteeringWheel size={20} color="white" />,
  },
];
