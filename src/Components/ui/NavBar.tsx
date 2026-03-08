const navItems = [
  {
    label: "nav-logo",
    icon: "/public/Assets/NavBar/TestLogo.svg",
    variant: "logo",
  },
  { label: "Overview", icon: "/public/Assets/NavBar/home.svg" },
  { label: "Patients", icon: "/public/Assets/NavBar/group_fIll.svg" },
  { label: "Schedule", icon: "/public/Assets/NavBar/calendar.svg" },
  { label: "Messages", icon: "/public/Assets/NavBar/chat_bubble.svg" },
  { label: "Transactions", icon: "/public/Assets/NavBar/credit_card.svg" },
];

const navProfile = {
  icon: "/public/Assets/NavBar/doctor.png",
  name: "Dr. Jose Simmons",
  description: "General Practitioner",
};

export default function NavBar() {
  const navItemClass =
    "flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer hover:bg-[#01F0D0]";
  const navListStyle = {
    fontFamily: "Manrope, 'Manrope', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "19px",
  };

  return (
    <div className="navbar flex items-center justify-between bg-[#FFFFFF] rounded-full p-5 m-5 absolute inset-x-0 top-0 h-16">
      <div className="left-logo-element flex items-start gap-2">
        {" "}
        <img
          src="/public/Assets/NavBar/TestLogo.svg"
          alt="nav-logo"
          className="h-8 w-auto"
        />
      </div>
      <ul
        className="middle-components flex flex-row gap-4.5 justify-center items-center flex-1"
        style={navListStyle}
      >
        {navItems.map((item) =>
          item.variant === "logo" ? (
            <li
              key={item.label}
              className={`${navItemClass} pointer-events-none bg-transparent p-0`}
            ></li>
          ) : (
            <li key={item.label} className={navItemClass}>
              <img src={item.icon} alt={`${item.label.toLowerCase()}-icon`} />
              {item.label}
            </li>
          )
        )}
      </ul>

      <div className="right-elements flex flex-col items-end gap-3 text-sm justify-center">
        <div className="description flex items-center gap-2">
          <img
            src={navProfile.icon}
            alt="doctor icon"
            className="h-11 w-11 rounded-full"
          />
          <div className="flex items-center gap-3 divide-x-2 divide-solid divide-[#e0e0e0]">
            <div className="info pr-3">
              {" "}
              <span className="font-semibold">{navProfile.name}</span>
              <p className="text-[0.85rem] text-[#4f4f4f]">
                {navProfile.description}
              </p>
            </div>
            <div className=" options flex items-center  justify-center  gap-3">
              <img
                src="/public/Assets/NavBar/settings.svg"
                alt="settings-icon"
                className="cursor-pointer"
              />
              <img
                src="/public/Assets/NavBar/Options.svg"
                alt="options-icon"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
