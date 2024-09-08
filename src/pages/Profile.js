// src/pages/Profile.js
import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const Profile = () => {
  const user = useSelector((state) => state.auth.user); // Get user from Redux store

  // Debugging: Check if the user is correctly fetched from the store
  console.log("User from Redux store:", user);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Profile</Typography>
      {user ? (
        <>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Current Username: {user.username} {/* Display current username */}
          </Typography>
        </>
      ) : (
        <Typography variant="body1" color="textSecondary">
          Please log in to view your profile.
        </Typography>
      )}
    </Box>
  );
};

export default Profile;
