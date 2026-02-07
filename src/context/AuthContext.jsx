//src/context/AuthContext.jsx
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Create the context and provider component
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // login function (mock validation)
  const login = ({ name, phone }) => {
    //name must be not less than 2 characters and not a number
    const isNameValid = /^[A-Za-z].{1,}$/.test(name.trim());
    // Poland phone code (+48) and 9 digits after:
    const isPhoneValid = /^\+48\d{9}$/.test(phone);

    if (isNameValid && isPhoneValid) {
      setUser({ name, phone });
      navigate("/"); // redirect to Main Page
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
