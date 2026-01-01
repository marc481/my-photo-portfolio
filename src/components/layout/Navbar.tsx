import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-neutral-800 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/*Centered Navigation */}
        <p className="text-sm font-medium text-neutral-900">John Doe</p>

        {/*Centered Navigation */}
        <div className="flex gap-8 text-xs uppercase tracking-widest text-neutral-800">
          {/* Helper to keep classes consistent */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition hover:text-neutral-900 ${
                isActive ? "text-neutral-900 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* Gallery / Portfolio Screen */}
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `transition hover:text-neutral-900 ${
                isActive ? "text-neutral-900 font-semibold" : ""
              }`
            }
          >
            Portfolio
          </NavLink>

          {/* About Screen */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition hover:text-neutral-900 ${
                isActive ? "text-neutral-900 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>

          {/* Contact Screen */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition hover:text-neutral-900 ${
                isActive ? "text-neutral-900 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
