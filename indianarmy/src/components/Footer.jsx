import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  const baseLinkStyle = 'hover:text-yellow-600 transition-colors duration-200';
  const activeLinkStyle = 'text-yellow-600 underline';

  return (
    <footer className="bg-white text-blue-900 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Footer Left: Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Indian Army Tribute Project</p>

        {/* Footer Middle: Navigation Links */}
        <ul className="flex gap-4 text-sm font-medium">
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
              to="/awards"
              className={({ isActive }) =>
                isActive ? `${baseLinkStyle} ${activeLinkStyle}` : baseLinkStyle
              }
            >
              Awards
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

        {/* Footer Right: Credit */}
        <p className="text-sm">Designed with ❤️ by <Link to="/" className="underline hover:text-yellow-300">Khushi</Link></p>
      </div>
    </footer>
  );
}

