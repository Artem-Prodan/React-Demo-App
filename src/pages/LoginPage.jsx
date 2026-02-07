 import { useState } from "react";
  import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login({ name, phone });
    if (!success) {
      setError("Invalid name or phone. \nName should be a string and no less than 2 chars. \nPhone starts with +48. \nEnter 9 number digits after phone code.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="phone-field">
          <label htmlFor="phone">Phone:</label>

          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+48123456789"
            maxLength={12}
          />

        </div>
        {error && <p className="login-error-message">{error}</p>}
        <button className="login-submit-button" type="submit">Login</button>
      </form>
    </div>
  );
}
