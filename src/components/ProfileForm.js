// src/components/ProfileForm.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/slices/authSlice";

const ProfileForm = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(user.username);

  const handleUpdateProfile = () => {
    dispatch(updateProfile({ username }));
    alert("Profile updated successfully!");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Profile</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
        Update Profile
      </Button>
    </Box>
  );
};

export default ProfileForm;
