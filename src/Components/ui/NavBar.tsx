function NavBar() {
  return (
    <div className="navbar flex bg-[#FFFFFF] rounded-full p-5 absolute inset-x-0 top-0 h-16">
      <div className="navbar-logo">
        <img src="/public/Assets/TestLogo.svg" alt="nav-logo" />
      </div>
      <ul className="flex-row flex gap-4 justify-center items-center w-full">
        <li>Overview</li>
        <li>Patients</li>
        <li>Schedule</li>
        <li>Messages</li>
        <li>Transactions</li>
      </ul>
    </div>
  );
}

export default NavBar;
