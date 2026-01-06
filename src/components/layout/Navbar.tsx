import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-56 border-r border-neutral-200 bg-white px-6 py-8">
      {/* Name / branding */}
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `inline-block text-sm font-semibold tracking-wide transition ${
              isActive
                ? "text-neutral-900"
                : "text-neutral-700 hover:text-neutral-900"
            }`
          }
        >
          Ben
        </NavLink>
      </div>

      {/* Spacer between name and nav */}
      <div className="mt-10" />

      {/* Navigation */}
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
    </aside>
  );
}
