import React from 'react';
import { useSelector } from 'react-redux';
import defaultProfileImage from '../../assets/images/otaku-profile-photo.png';
import FooterLogic from '../Footer/FooterLogic';

const UserProfile = () => {
  const user = useSelector((state) => state.user.userInfo.data);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-12 pt-2 sm:pt-20 mt-4 sm:mt-6">
      <h1 className="text-2xl font-bold mb-8 mt-20">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
            src={defaultProfileImage}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-4" // Tamaño y estilo de la imagen
        />
        <div className="text-left">
          <p className="mb-2"><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>  
      </div>
      <FooterLogic />
    </div>
  );
};

export default UserProfile;