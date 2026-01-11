import { NavLink } from "react-router-dom";

const linkClass =
    "block px-3 py-2 rounded-md text-sm hover:bg-accent";

export default function Sidebar() {
    return (
        <aside className="w-64 border-r p-3 space-y-1">
            <NavLink to="/" end className={linkClass}>
                Home
            </NavLink>
            <NavLink to="/dashboard" className={linkClass}>
                Dashboard
            </NavLink>
            <NavLink to="/settings" className={linkClass}>
                Settings
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
                Projects
            </NavLink>
        </aside>
    );
}
