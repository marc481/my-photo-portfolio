import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Leftside: your name / logo*/}

        <div className="flex-items-baseline gap-2">
          <span className="text-xs uppercase tracking-[0.25wm] text-neutral-400">
            Photographer
          </span>

          <span className="text-sm font-semibold tracking-wide">
            Marcus Ocampo
          </span>
        </div>

        {/* Right side: navigation links */}
        <div className="flex gap-4 text-[11px] font-medium text-neutral-300">
          {/* Helper to keep classes consistent */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-white transition ${isActive ? "text-white" : ""}`
            }
          >
            Home
          </NavLink>

          {/* Gallery / Portfolio Screen */}
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-white transition ${isActive ? "text-white" : ""}`
            }
          >
            Portfolio
          </NavLink>

          {/* About Screen */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-white transition ${isActive ? "text-white" : ""}`
            }
          >
            About
          </NavLink>

          {/* Contact Screen */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-white transition ${isActive ? "text-white" : ""}`
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
