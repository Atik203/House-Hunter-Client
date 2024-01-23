import { useEffect } from "react";
import { useState, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Check if the user is authenticated on the server
        const response = await axios.get("http://localhost:5000/authenticate");
        console.log(response.data);
        setUser(response.data.user); // Assuming your API returns the authenticated user data
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);
  console.log(user);
  const AuthInfo = { user, loading };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
