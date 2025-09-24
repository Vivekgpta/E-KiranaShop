import React from 'react'
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
       <div className=" w-16 h-12 rounded-lg flex items-center justify-center cursor-pointer ">
                <Link
                  to="/login"
                  className="text-gray-800 dark:text-white hover:text-blue-500 py-2 rounded-md transition"
                >
                  <i
                    className="bi bi-person-circle me-2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  ></i>
                </Link>
              </div>
    </div>
  )
}

export default Profile
