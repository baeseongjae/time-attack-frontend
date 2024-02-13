import React from "react";
import Header from "./_components/Header";
import ModalComponent from "./_components/ModalComponent";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <ModalComponent />
    </>
  );
}

export default RootLayout;
