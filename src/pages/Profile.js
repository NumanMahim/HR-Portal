import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import "../styles/Profile.css";

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState({});
  const [editField, setEditField] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setProfileData(userDoc.data());
        } else {
          alert("No profile data found.");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        alert("Failed to load profile data. Please try again.");
      }
      setLoading(false);
    };

    fetchProfileData();
  }, [user.uid]);

  const handleEdit = (field) => {
    setEditField(field);
  };

  const handleSave = async (field) => {
    if (profileData[field]) {
      try {
        await updateDoc(doc(db, "users", user.uid), {
          [field]: profileData[field],
        });
        setEditField(null);
      } catch (error) {
        console.error("Error updating profile data:", error);
        alert("Failed to update profile data. Please try again.");
      }
    }
  };

  const handleChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-fields">
        {Object.keys(profileData).map((field) => (
          <div key={field} className="profile-field">
            <label>{field}</label>
            {editField === field ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={profileData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
                <button onClick={() => handleSave(field)} className="save-button">
                  Save
                </button>
              </div>
            ) : (
              <div className="view-container">
                <span>{profileData[field]}</span>
                <button onClick={() => handleEdit(field)} className="edit-button">
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
