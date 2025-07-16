import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
            {user.name.charAt(0)}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Company:</span> {user.company.name}
        </p>
      </div>
      
        <div className="mt-4 animate-fadeIn">
          <p className="text-gray-600">
            <span className="font-medium">Address:</span>{' '}
            {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Geo:</span>{' '}
            Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Phone:</span> {user.phone}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Website:</span>{' '}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Company Catchphrase:</span>{' '}
            {user.company.catchPhrase}
          </p>
        </div>
    </div>
  );
};

export default UserCard;