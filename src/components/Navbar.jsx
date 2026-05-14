import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="w-full py-4 px-3 bg-teal-900 text-white font-bold tracking-wider flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-3">
      <h2 className="text-2xl text-white font-bold font-mono">
        <NavLink to={"/"}>PasteVault</NavLink>
      </h2>
      <ul className="flex gap-6 sm:gap-15 justify-center items-center">
        <li className="text-xs sm:text-sm">
          <NavLink
            className={({ isActive }) =>
              `px-1.5 py-1.5 rounded hover:bg-teal-500/10 ${
                isActive ? `bg-gray-400/10 transition-colors` : ``
              }`
            }
            to="/"
          >
            All Pastes
          </NavLink>
        </li>
        <li className="text-xs sm:text-sm">
          <NavLink
            className={({ isActive }) =>
              `px-1.5 py-1.5 rounded hover:bg-teal-500/10 ${
                isActive ? `bg-gray-400/10 transition-colors` : ``
              }`
            }
            to="/create"
          >
            Create Paste
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
