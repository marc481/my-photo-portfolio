// NavBar.tsx
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <aside
      className="
        bg-white border-neutral-200

        /* Mobile: top bar */
        fixed top-0 left-0 right-0 z-50
        border-b
        px-4 py-4

        /* Desktop: left sidebar */
        md:fixed md:top-0 md:left-0 md:right-auto
        md:h-screen md:w-56
        md:border-b-0 md:border-r
        md:px-6 md:py-8
      "
    >
      {/* Brand */}
      <div className="flex items-center justify-between md:block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            relative inline-block text-lg md:text-2xl font-medium tracking-tight transition
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

        {/* Mobile nav links inline */}
        <nav className="flex gap-4 text-[0.65rem] uppercase tracking-widest md:hidden">
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
      </div>

      {/* Desktop nav */}
      <div className="hidden md:block">
        <div className="mt-10" />
        <nav className="flex flex-col gap-6 text-xs uppercase tracking-widest">
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
      </div>
    </aside>
  );
}
