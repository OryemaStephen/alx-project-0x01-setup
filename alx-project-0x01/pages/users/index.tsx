import Header from "@/components/layout/Header";
import React from "react";

const Users: React.FC = () => {
  return (
    <div className="flex w-full flex-col h-screen">
      <Header />
      <h1 className="text-7xl font-thin">Users Page</h1>
    </div>
  );
};

export default Users;
