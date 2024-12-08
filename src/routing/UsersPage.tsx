import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const UsersPage = () => {
  return (
    <div className="row">
      <div className="col-3">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
