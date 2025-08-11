import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const baseLinkStyle = 'hover:text-yellow-600 transition-colors duration-200';
  const activeLinkStyle = 'text-yellow-600 font-semibold underline';

  return (
    <header className="bg-white text-blue-900 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo or Brand (uses Link) */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-green-800 hover:text-yellow-600 transition">
          SHAHEED <span className="text-yellow-600">CHRONICLES</span>
        </Link>

        {/* Navigation Links (uses NavLink) */}
        <ul className="flex gap-6 font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${baseLinkStyle} ${activeLinkStyle}` : baseLinkStyle
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wars"
              className={({ isActive }) =>
                isActive ? `${baseLinkStyle} ${activeLinkStyle}` : baseLinkStyle
              }
            >
              Wars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mission"
              className={({ isActive }) =>
                isActive ? `${baseLinkStyle} ${activeLinkStyle}` : baseLinkStyle
              }
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/award"
              className={({ isActive }) =>
                isActive ? `${baseLinkStyle} ${activeLinkStyle}` : baseLinkStyle
              }
            >
              Award
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${baseLinkStyle} ${activeLinkStyle}` : baseLinkStyle
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                isActive ? `${baseLinkStyle} ${activeLinkStyle}` : baseLinkStyle
              }
            >
              Quiz
            </NavLink>
          </li>
        </ul>


      </nav>
    </header>
  );
}

