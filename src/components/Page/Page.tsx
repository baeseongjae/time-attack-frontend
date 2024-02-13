import React from "react";

function Page({ children }: { children: React.ReactNode }) {
  return <main className="box-border">{children}</main>;
}

export default Page;
