"use client";
// import React from "react";

// import { SessionProvider } from "next-auth/react";

// const sessionprovider = () => {
//   return <div></div>;
// };

// export default sessionprovider;

import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function AuthProvider({children }) {
  return (
    <SessionProvider>{children} </SessionProvider>
  )
}