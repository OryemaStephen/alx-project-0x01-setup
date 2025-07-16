import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({id, name, username,email, company,address,phone,website }) => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
            {name[0].toUpperCase()}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{username}</p>
          <p className="text-sm text-gray-500">User ID: {id}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Company:</span> {company.name}
        </p>
      </div>
      
        <div className="mt-4 animate-fadeIn">
          <p className="text-gray-600">
            <span className="font-medium">Address:</span>{' '}
            {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Geo:</span>{' '}
            Lat: {address.geo.lat}, Lng: {address.geo.lng}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Phone:</span> {phone}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Website:</span>{' '}
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {website}
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Company Catchphrase:</span>{' '}
            {company.catchPhrase}
          </p>
        </div>
    </div>
  );
};

export default UserCard;