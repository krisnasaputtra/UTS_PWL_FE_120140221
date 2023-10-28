import { NavLink } from "react-router-dom";

const Nav = () => {
  const menuNav = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Dashboard",
      link: "/dashboard",
    },
  ];

  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Produk App
          </span>
        </a>
        <div className="block w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row p-0 mt-0 border-0 border-gray-700 rounded-lg bg-transparent space-x-8">
            {menuNav.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700"
                      : "text-white hover:text-blue-700"
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
