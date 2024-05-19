/* eslint-disable react/prop-types */
import { BiSolidCameraMovie } from "react-icons/bi";
import { NavLink } from "react-router-dom";



function Navigation({children}) {
  return (
    <header className="bg-yellow-100 flex gap-5 border-b-2 border-black shadow-xl items-center py-3 px-5">
      <BiSolidCameraMovie size="36px" />
      <nav className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` font-mono font-bold text-xl ${
              isActive ? "text-orange-700 hover:text-orange-800" : "text-gray-900 hover:text-gray-950"
            } `
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            ` font-mono font-bold text-xl ${
              isActive ? "text-orange-700 hover:text-orange-800" : "text-gray-900 hover:text-gray-950"
            } `
          }
        >
          Movies
        </NavLink>
      </nav>
      {children}
    </header>
  );
}

export default Navigation;
