const dashboardMenu = [
  {
    label: "Dashboard",
    link: "/dashboard/Home",
    icon: "ri-dashboard-line",
  },
  {
    label: "Booking History",
    link: "/dashboard/finance",
    icon: "ri-pie-chart-2-line",
  },
  {
    label: "Wishlist",
    link: "/dashboard/events",
    icon: "ri-calendar-todo-line",
  },
  {
    label: "Manage News",
    link: "/dashboard/sales",
    icon: "ri-shopping-bag-3-line",
  },
  {
    label: "Booking Report",
    link: "/dashboard/analytics",
    icon: "ri-bar-chart-2-line",
  },
  {
    label: "Verfications",
    link: "/dashboard/crypto",
    icon: "ri-coin-line",
  },
  {
    label: "Messages",
    link: "/dashboard/helpdesk",
    icon: "ri-service-line",
  },
  {
    label: "Payouts",
    link: "/dashboard/storage",
    icon: "ri-hard-drive-2-line",
  },
  {
    label: "My Plans",
    link: "/dashboard/product",
    icon: "ri-suitcase-2-line",
  },
];

const pagesMenu = [
  {
    label: "Manage Hotel",
    icon: "ri-account-circle-line",
    submenu: [
      {
        label: "All Hotels",
        link: "/pages/allhotels",
      },
      {
        label: "Add Hotel",
        link: "/pages/AddHotel",
      },
      {
        label: "Recovery",
        link: "/pages/activity",
      },
    ],
  },

  {
    label: "Manage Car",
    icon: "ri-error-warning-line",
    submenu: [
      {
        label: "All Cars",
        link: "/pages/allcars",
      },
      {
        label: "Add Car",
        link: "/pages/AddCar",
      },
      {
        label: "Availability",
        link: "/pages/activity",
      },
      {
        label: "Recovery",
        link: "/pages/activity",
      },
    ],
  },

  {
    label: "Manage Event",
    icon: "ri-error-warning-line",
    submenu: [
      {
        label: "All Events",
        link: "/pages/allEvents",
      },
      {
        label: "Add Event",
        link: "/pages/AddEvent",
      },
      {
        label: "Availability",
        link: "/pages/activity",
      },
      {
        label: "Recovery",
        link: "/pages/activity",
      },
    ],
  },
];

export { dashboardMenu, pagesMenu };
