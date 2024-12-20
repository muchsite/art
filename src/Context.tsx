import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  user: string;
  userType: string;
  setUser: (user: string) => void;
  setUserType: (user: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string>(localStorage.getItem("user") ?? "");
  const [userType, setUserType] = useState<string>(
    localStorage.getItem("user") ?? ""
  );

  return (
    <UserContext.Provider value={{ user, setUser, setUserType, userType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
