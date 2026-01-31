// NavBar.tsx
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <aside
      className="
        fixed top-0 left-0 z-50
        h-screen
        w-44 sm:w-48 md:w-56   /* Sidebar width scales up with screen size */
        bg-white
        border-r border-neutral-200
        px-4 sm:px-5 md:px-6
        py-6 md:py-8
      "
    >
      {/* Brand */}
      <div className="mb-8 md:mb-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            relative inline-block font-medium tracking-tight transition
            text-base sm:text-lg md:text-2xl
            ${
              isActive
                ? "text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-neutral-900"
                : "text-neutral-700 hover:text-neutral-900"
            }
          `
          }
        >
          Marcus Ocampo
        </NavLink>
      </div>

      {/* Nav links  */}
      <nav className="flex flex-col gap-5 md:gap-6 text-[0.65rem] sm:text-xs uppercase tracking-widest">
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-neutral-900"
              : "text-neutral-500 hover:text-neutral-900 transition"
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-neutral-900"
              : "text-neutral-500 hover:text-neutral-900 transition"
          }
        >
          About
        </NavLink>
      </nav>
    </aside>
  );
}
