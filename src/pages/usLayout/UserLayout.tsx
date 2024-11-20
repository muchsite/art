import React, { useState } from "react";
import UserNc from "./user/UserNc";
import CreatorUser from "./creator/CreatorUser";

const UserLayout = () => {
  const [userType, setUserType] = useState(
    localStorage.getItem("userType") ?? ""
  );
  console.log("asdfasdf");
  return (
    <>
      {userType === "user" && <UserNc />}
      {userType === "creator" && <CreatorUser />}
    </>
  );
};

export default UserLayout;
