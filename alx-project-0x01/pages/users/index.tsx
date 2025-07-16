/* eslint-disable @typescript-eslint/no-unused-vars */
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps, UsersPageProps } from "@/interfaces";
import React, { useState } from "react";

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false); 
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({...newUser, id: users.length+1});
  };

  const posts = users;
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map((user: UserProps) => (
            <UserCard id={user.id} name={user.name} username={user.username} email={user.email} company={user.company} address={user.address} phone={user.phone} website={user.website} key={user.id} />
          ))}
        </div>
      </main>
      {
        isModalOpen && (
            <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
        )
      }
    </div>
  );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();

    return {
      props: {
        users,
      },
    };
}

export default Users;
