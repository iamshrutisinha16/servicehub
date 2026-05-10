import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // API URL
      const res = await axios.post(
        "https://servicehub-dxk3.onrender.com/api/users/login",
        {
          email,
          password,
        }
      );

      // Token save
      localStorage.setItem("token", res.data.token);

      setMessage("Login Successful");

      // Redirect
      window.location.href = "/";

    } catch (error) {
      console.log(error);

      setMessage(
        error.response?.data?.message ||
        "Login Failed "
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "400px" }}
    >
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">
          Customer Login
        </h2>

        {message && (
          <div className="alert alert-info">
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Login;