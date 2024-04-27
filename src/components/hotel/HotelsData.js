import {
  MdAlarm,
  MdDirectionsCar,
  MdTv,
  MdLocalLaundryService,
  MdWifi,
  MdLocalCafe,
  MdLocalBar,
  MdRestaurant,
  MdLocalTaxi,
  MdLocalShipping,
  MdLuggage,
  MdPets,
  MdConfirmationNumber,
} from "react-icons/md";

export const hotelFacilties = [
  {
    id: 1,
    label: "Wake up call",
    icon: <MdAlarm size={20} color="white" />,
  },
  {
    id: 2,
    label: "Car hire",
    icon: <MdDirectionsCar size={20} color="white" />,
  },
  {
    id: 3,
    label: "Flat Tv",
    icon: <MdTv size={20} color="white" />,
  },
  {
    id: 4,
    label: "Laundry",
    icon: <MdLocalLaundryService size={20} color="white" />,
  },
  {
    id: 5,
    label: "Internet – Wifi",
    icon: <MdWifi size={20} color="white" />,
  },
  {
    id: 6,
    label: "Coffee and tea",
    icon: <MdLocalCafe size={20} color="white" />,
  },
];

export const hotelService = [
  {
    id: 1,
    label: "Havana Lobby",
    icon: <MdLocalBar size={20} color="white" />,
  },
  {
    id: 2,
    label: "Fiesta Restaurant",
    icon: <MdRestaurant size={20} color="white" />,
  },
  {
    id: 3,
    label: "Hotel transport",
    icon: <MdLocalTaxi size={20} color="white" />,
  },
  {
    id: 4,
    label: "luggage deposit",
    icon: <MdLocalShipping size={20} color="white" />,
  },
  {
    id: 5,
    label: "Laundry Services",
    icon: <MdLocalLaundryService size={20} color="white" />,
  },
  {
    id: 6,
    label: "Pets welcome",
    icon: <MdPets size={20} color="white" />,
  },
  {
    id: 7,
    label: "Tickets",
    icon: <MdConfirmationNumber size={20} color="white" />,
  },
];
