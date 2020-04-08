import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components.css'
import {connect } from 'react-redux';

const Navbar = () => {
  const activeStyle = { backgroundColor: "#0bbfbc", color: 'white' };
  const token = localStorage.getItem('token')
  return (
    <div>
      <nav className="navbar navbar-dark shadow bg-navbar justify-content-between">
        <a className=" ml-5 text-info " href="/">Dev | Transport</a>
        <form className="form-inline my-1">
      {
        token ? (
          <>
              <NavLink activeStyle={activeStyle} className="btn btn-outline-white btn-md mr-5 shadow rounded" to="/trip" exact >New Trip</NavLink>
              <NavLink activeStyle={activeStyle} className="btn btn-outline-white btn-md mr-5 shadow  rounded" to="/dashboard" >Dashboard</NavLink>
              </>
  ) : (
                <>
          <NavLink activeStyle={activeStyle} className="btn btn-outline-white btn-md mr-5 shadow  rounded" to="/" exact>Signup</NavLink>
          <NavLink activeStyle={activeStyle} className="btn btn-outline-white btn-md mr-5 shadow rounded" to="/login">Login</NavLink>
                </>
        )
    }
        </form> 

        </nav>
    </div>
      )
    }
    const MapStateToProps = ({trips, user}) => {
      return {
        trips,
        user
      }
    }
export default connect(MapStateToProps)(Navbar);
