import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-50 w-full min-h-screen p-6 pt-32">
      <h1 className="text-3xl font-bold text-gray-800 text-left mb-8">
        Client Lists
        <hr />
      </h1>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-48 object-cover p-4 bg-gray-100"
            />
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{user.email}</p>
              <p className="text-gray-600 text-sm mb-4">{user.phone}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-pink-600">
                  {user.address.city}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
