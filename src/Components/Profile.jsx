import React, { useEffect, useState } from "react";
import { getProfile } from "../services/apiService";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getProfile();
        setUser(res.data);
      } catch (err) {
        console.error("Profile fetch failed:", err.response?.data || err.message);
        const localUser = localStorage.getItem("user");
        if (localUser) {
          setUser(JSON.parse(localUser));
        }
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    window.location.href = "/login";
  };

  if (!user) {
    return (
      <div className="w-full min-h-[90vh] flex justify-center items-center bg-gray-100">
        <p className="text-base sm:text-lg font-semibold">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[90vh] flex justify-center items-start px-4 sm:px-8 lg:px-[5%] py-8 bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center sm:text-left">
          My Profile
        </h1>

        <div className="flex flex-col gap-4">
          {user.name && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Name:</span>
              <span className="text-gray-900">{user.name}</span>
            </div>
          )}
          {user.email && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="text-gray-900 break-all">{user.email}</span>
            </div>
          )}
          {user.username && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Username:</span>
              <span className="text-gray-900">{user.username}</span>
            </div>
          )}
          {user.role && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Role:</span>
              <span className="text-gray-900">{user.role}</span>
            </div>
          )}
          {user.phone && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Phone:</span>
              <span className="text-gray-900">{user.phone}</span>
            </div>
          )}
          {user.address && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Address:</span>
              <span className="text-gray-900">{user.address}</span>
            </div>
          )}
          {user.gender && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Gender:</span>
              <span className="text-gray-900">{user.gender}</span>
            </div>
          )}
          {user.dob && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Date of Birth:</span>
              <span className="text-gray-900">{user.dob}</span>
            </div>
          )}
          {user.bio && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Bio:</span>
              <span className="text-gray-900">{user.bio}</span>
            </div>
          )}
          {user.joined && (
            <div className="flex flex-col sm:flex-row justify-between border-b py-2">
              <span className="font-semibold text-gray-700">Member Since:</span>
              <span className="text-gray-900">{user.joined}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-white hover:text-red-600 hover:border hover:border-red-600 transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
