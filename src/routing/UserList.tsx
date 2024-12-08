import { Link, NavLink, Outlet } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
