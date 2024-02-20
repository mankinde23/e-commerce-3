"use client";
// import React from "react";

// import { SessionProvider } from "next-auth/react";

// const sessionprovider = () => {
//   return <div></div>;
// };

// export default sessionprovider;

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import React from "react";
import { store } from "@/redux/store";

export default function AuthProvider({ children }) {
  return (
    <Provider store={store}>
      <SessionProvider>{children} </SessionProvider>
    </Provider>
  );
}
