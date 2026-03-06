const navItems = [
  { label: "Overview", icon: "/public/Assets/home.svg" },
  { label: "Patients", icon: "/public/Assets/group_fIll.svg" },
  { label: "Schedule", icon: "/public/Assets/calendar.svg" },
  { label: "Messages", icon: "/public/Assets/chat_bubble.svg" },
  { label: "Transactions", icon: "/public/Assets/credit_card.svg" },
];

function NavBar() {
  const navItemClass =
    "flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer hover:bg-[#01F0D0]";

  return (
    <div className="navbar flex bg-[#d1c5c5] rounded-full p-5 absolute inset-x-0 top-0 h-16">
      <div className="navbar-logo flex items-center justify-center ">
        <img src="/public/Assets/TestLogo.svg" alt="nav-logo" />
      </div>
      <ul className="flex-row flex gap-10 justify-center items-center w-full">
        {navItems.map((item) => (
          <li key={item.label} className={navItemClass}>
            <img src={item.icon} alt={`${item.label.toLowerCase()}-icon`} />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
