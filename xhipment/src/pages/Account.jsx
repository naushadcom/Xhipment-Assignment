import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[300px] m-auto'>
      <h2 className='text-center text-xl font-bold pt-12'>Account</h2>
      <div>
        <p style={{textAlign:"center"}}>Welcome, <span style={{fontSize:"20px",fontWeight:"bold"}}>{user?.displayName}</span> </p>
      </div>
      {/* <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button> */}
    </div>
  );
};

export default Account;
