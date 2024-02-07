// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

interface AuthContextProps {
  logOut: () => void;
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  token: string;
  setToken: (value: string) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState<string>("");
  const getToken = sessionStorage.getItem("token");

  const contextValue: AuthContextProps = {
    isAuthenticated,
    setAuthenticated,
    token,
    setToken,
    logOut: () => {
      const emptyToken = "";
      sessionStorage.setItem("token", emptyToken);
      setToken(emptyToken);
      setAuthenticated(false);
    },
  };

  useEffect(() => {
    if (getToken) {
      setToken(getToken);
      setAuthenticated(true);
    }
  }, [token, isAuthenticated, getToken]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
