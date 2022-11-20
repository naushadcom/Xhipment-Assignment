import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "lightblue",
        padding:"20px"
      }}
    >
      <h1 style={{ fontSize: "40px" }}>XHIPMENT</h1>
      {/* <h4 style={{marginTop:"40px"}}>Welcome, <span style={{fontWeight:"bold",fontSize:"20px"}}>{user?.displayName}</span></h4> */}
      <div style={{ marginTop: "15px" }}>
        {user?.displayName ? (
          <button style={{ marginLeft: "43%",backgroundColor:"lightblue",fontWeight:"bold" }} onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <Link
            to="/signin"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "20px",
              border: "4px solid black",
              padding: "10px",
            }}
          >
            Sign in with google
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
