import { useEffect } from "react";
import { useState, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userEmail) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/userByEmail/${userEmail}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userEmail]);

  const logout = () => {
    setUser(null);
    setUserEmail(null);
  };

  const AuthInfo = { user, userEmail, loading, setUserEmail, logout };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
