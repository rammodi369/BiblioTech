// import React from 'react';
// import { useSelector, } from 'react-redux';
// import { UserCircle } from 'lucide-react';

// const UserProfile = () => {
//   const { user } = useSelector((state) => state.user);
//  console.log(user);
//  console.log(user.email)
//   return (
//     <div className="container mx-auto px-4 py-8 mt-16 mb-10 relative z-[-10]">
//      <div className='flex items-center justify-center'> <h2 className="text-3xl font-semibold mt-4 mb-4 text-gray-700 items-center">Profile Page </h2></div>
//       <div className="flex justify-center">
//         <div className="max-w-lg w-full lg:w-2/3 px-4 py-6">
//           <div className="bg-white rounded-lg overflow-hidden transform transition-transform hover:scale-105 shadow-2xl">
//             <div className="h-64 bg-gray-300 flex items-center justify-center">
//               <UserCircle size={80} className="text-gray-600" />
//             </div>
//             <div className="p-6">
//               <h1 className="text-4xl font-semibold mb-4 text-center">{user.username}'s Profile</h1>
//               <div className="mb-4 text-center">
//                 <p className="text-lg text-gray-700"><strong>Email:</strong> {user.email}</p>
//                 <p className="text-lg text-gray-700"><strong>Role:</strong> {user.role}</p>
//               </div>
//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold mb-4 text-gray-700">Books Borrowed:</h2>
//                 <ul className="list-disc ml-8">
//                 {user.booksBorrowed?.length > 0 ? (
//                   <>{user.booksBorrowed?.map((book) => (
//                     <li key={book._id} className="text-lg text-gray-600">{book.title}</li>
//                   ))}</>) : (
//                     <div className="text-lg text-gray-600">No books borrowed yet!!</div>
//                 )}
//                 </ul>
//               </div>
//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold mb-4 text-gray-700">Books Borrowing Currently:</h2>
//                 <ul className="list-disc ml-8">
//                 {user.booksBorrowingCurrently?.length > 0 ? (
//                   <>{user.booksBorrowingCurrently?.map((book) => (
//                     <li key={book._id} className="text-lg text-gray-600">{book.title}</li>
//                   ))}</>) : (
//                     <div className="text-lg text-gray-600">No books borrowing Currently !!</div>
//                 )}
//                 </ul>
//               </div>
//               <h2 className="text-xl font-semibold mb-4 text-gray-700 mt-5">Fine: 0
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { UserCircle, Pencil, Book, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Here you would typically dispatch an action to update the user in your Redux store
    console.log("Updated user:", editedUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-white p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center overflow-hidden">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <UserCircle size={120} className="text-white" />
                    )}
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full bg-white hover:bg-gray-100"
                    >
                      <Pencil className="h-4 w-4 text-indigo-600" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          value={editedUser.username}
                          onChange={(e) =>
                            setEditedUser({
                              ...editedUser,
                              username: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={editedUser.email}
                          onChange={(e) =>
                            setEditedUser({
                              ...editedUser,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Role</Label>
                        <Input
                          id="role"
                          value={editedUser.role}
                          onChange={(e) =>
                            setEditedUser({
                              ...editedUser,
                              role: e.target.value,
                            })
                          }
                        />
                      </div>
                      <Button type="submit">Save Changes</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <h1 className="mt-6 text-3xl font-bold text-white">
                {user.username}
              </h1>
              <p className="mt-1 text-lg text-indigo-200">{user.role}</p>
              <p className="mt-1 text-md text-indigo-100">{user.email}</p>
            </div>
            <div className="p-8 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileSection
                  title="Books Borrowed"
                  icon={<Book className="h-6 w-6 text-indigo-500" />}
                  items={user.booksBorrowed}
                />
                <ProfileSection
                  title="Currently Borrowing"
                  icon={<Clock className="h-6 w-6 text-indigo-500" />}
                  items={user.booksBorrowingCurrently}
                />
              </div>
              <div className="mt-8 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-2xl font-semibold text-gray-700">
                  Fine: $0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileSection = ({ title, icon, items }) => (
  <div className="bg-gray-50 rounded-xl p-6 shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold text-gray-800 ml-2">{title}</h2>
    </div>
    {items && items.length > 0 ? (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={item._id || index} className="text-gray-600">
            {item.title}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No items to display</p>
    )}
  </div>
);

export default UserProfile;
