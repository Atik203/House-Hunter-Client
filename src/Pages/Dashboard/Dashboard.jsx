import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaTasks, FaRegEdit } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const DrawerLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-red-500" : "text-white"
    }
  >
    {children}
  </NavLink>
);

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <DrawerLink to="/dashboard/manage-house">
          <FaTasks></FaTasks> Manage House and Bookings
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/create-house">
          <FaRegEdit /> Add New House
        </DrawerLink>
      </li>
    </>
  );

  const menuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black" : "text-white"
          }
        >
          <FaHome></FaHome>Go HOME
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer  lg:drawer-open">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center mt-4">
          <label
            htmlFor="my-drawer-2"
            className="btn border-none text-black text-lg my-4 drawer-button lg:hidden"
          >
            <div className="">
              <TiThMenu></TiThMenu>
            </div>
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-slate-700 text-white font-bold text-lg min-h-full">
            <div className="p-4">
              <h1 className="text-base text-center my-2">{user?.name}</h1>
            </div>
            {/* Sidebar content here */}
            {links}
            <div className="divider divider-neutral"></div>
            {menuLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
