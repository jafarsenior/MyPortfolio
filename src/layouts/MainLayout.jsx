import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { BsFillMenuButtonFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import "./MainLayout.css";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="main-layout">
      <div className="background-image" />

      <div className="d-flex admin_nav">
        <div
          className={`sidebar d-none d-md-flex flex-column ${
            collapsed ? "collapsed" : ""
          }`}
        >
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between mb-4 px-3">
            <div className="admin-title text-white fw-bold">
              {collapsed ? "LD" : "LightingDev"}
            </div>
            <div
              className="toggle-icon text-white"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <BsFillMenuButtonWideFill size={20} />
              ) : (
                <BsFillMenuButtonFill size={20} />
              )}
            </div>
          </div>

          {/* Navigation */}
          <ul className="navbars nav flex-column align-items-start gap-3 px-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-icon-link d-flex align-items-center gap-2 ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <FaHome size={collapsed ? 22 : 18} />
                {!collapsed && <span>Home</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-icon-link d-flex align-items-center gap-2 ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <FaInfoCircle size={collapsed ? 22 : 18} />
                {!collapsed && <span>About</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-icon-link d-flex align-items-center gap-2 ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <GrServices size={collapsed ? 22 : 18} />
                {!collapsed && <span>Services</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-icon-link d-flex align-items-center gap-2 ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <MdOutlineWorkOutline size={collapsed ? 22 : 18} />
                {!collapsed && <span>Portfolio</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `nav-icon-link d-flex align-items-center gap-2 ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <CgNotes size={collapsed ? 22 : 18} />
                {!collapsed && <span>Resume</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-icon-link d-flex align-items-center gap-2 ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <FaPhone size={collapsed ? 22 : 18} />
                {!collapsed && <span>Contact</span>}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="content-area w-100">
          <Outlet />
        </div>
      </div>
      {/* Mobil Navbar */}
      <div className="position-fixed bottom-0 w-100 d-md-none z-3 py-3" style={{backgroundColor: "#685032"}}>
        <ul className="d-flex justify-content-between p-2 m-0 list-unstyled">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `d-flex flex-column align-items-center text-white ${
                  isActive ? "active" : ""
                }`
              }
            >
              <FaHome size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `d-flex flex-column align-items-center text-white ${
                  isActive ? "active" : ""
                }`
              }
            >
              <FaInfoCircle size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `d-flex flex-column align-items-center text-white ${
                  isActive ? "active" : ""
                }`
              }
            >
              <GrServices size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `d-flex flex-column align-items-center text-white ${
                  isActive ? "active" : ""
                }`
              }
            >
              <MdOutlineWorkOutline size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `d-flex flex-column align-items-center text-white ${
                  isActive ? "active" : ""
                }`
              }
            >
              <CgNotes size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `d-flex flex-column align-items-center text-white ${
                  isActive ? "active" : ""
                }`
              }
            >
              <FaPhone size={24} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
