import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const loggedOut = () =>{
        logOut()
        .then(result => console.log(result))
        .catch(err => {
            console.log(err.message)

        })
    }
    const navLinks = (
        <>
        <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
                `text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${
                isActive
                    ? "bg-transparent border-primary border !text-primary"
                    : "text-black "
                }`
            }
            >
            Home
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/about"
            className={({ isActive }) =>
                `text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${
                isActive
                    ? "bg-transparent border-primary border !text-primary"
                    : "text-black"
                }`
            }
            >
            About
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/services"
            className={({ isActive }) =>
                `text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${
                isActive
                    ? "bg-transparent border-primary border !text-primary"
                    : "text-black"
                } `
            }
            >
            Services
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/blog"
            className={({ isActive }) =>
                `text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${
                isActive
                    ? "bg-transparent border-primary border !text-primary"
                    : "text-black"
                } `
            }
            >
            Blog
            </NavLink>
        </li>
        <li>
            {
                user?
                <button
                    onClick={loggedOut}
                    className="text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent"
                    >
                    Log Out
                    </button>
                :<NavLink
                to="/login"
                className={({ isActive }) =>
                    `text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${
                    isActive
                        ? "bg-transparent border-primary border !text-primary"
                        : "text-black"
                    } `
                }
                >
                Log In
                </NavLink> 
            }
        </li>
        <li>
            {
                user?.email?
                <NavLink
                to="/yourOrders"
                className={({ isActive }) =>
                    `text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${
                    isActive
                        ? "bg-transparent border-primary border !text-primary"
                        : "text-black"
                    } `
                }
                >
                Your Orders
                </NavLink>:
                "" 
            }
        </li>
        </>
    );
    return (
        <div className="fixed w-full z-50 h-[96px]">
            <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown z-30">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-max p-2 gap-2 shadow"
                >
                    {navLinks}
                </ul>
                </div>
                <Link to="/">
                <img
                    className=" h-[80px] w-[90px]"
                    src={"src/assets/logo.svg"}
                    alt=""
                />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
            </div>

            <div className="navbar-end">
                <div className="flex justify-center items-center gap-3 ">
                <IoIosSearch className="text-xl hidden md:block lg:block" />
                <IoBagOutline className="text-xl hidden md:block lg:block" />
                <button className="btn btn-outline btn-error text-sm md:text-lg lg:text-lg font-normal md:font-semibold  lg:font-semibold">
                    Appointment
                </button>
                </div>
            </div>
            </div>
        </div>
    );
    };

export default Navbar;
