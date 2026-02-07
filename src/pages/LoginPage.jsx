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
      setError("Invalid name or phone. \nName should not be less than 2 chars. \nPhone starts with +48. \nEnter 9 number digits after phone code.");
    }
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: "50px auto",
      padding: 20,
      border: "1px solid #ccc",
      }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div style={{ marginBottom: 10 }}>
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
        {error && <p style={{ color: "red", whiteSpace: "pre-line" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
