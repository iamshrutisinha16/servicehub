import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {

    if (!formData.email || !formData.password) {
      setMessage("Please fill all fields");
      return;
    }

    try {

      setLoading(true);
      setMessage("");

      const res = await axios.post(
        "https://servicehub-dxk3.onrender.com/api/users/login",
        formData
      );

      const user = res.data.user;

      if (!user) {
        setMessage("Invalid response from server");
        return;
      }

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      setMessage("Login Successful");

      console.log("LOGIN USER:", user);

      // 🔥 ROLE BASED REDIRECT
      if (user.role === "vendor") {

        navigate("/vendor-dashboard");

      } else {

        navigate("/dashboard");
      }

    } catch (error) {

      console.log(error);

      setMessage(
        error.response?.data?.message ||
        "Login Failed"
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
          Login
        </h2>

        {message && (
          <div className="alert alert-info">
            {message}
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

      </div>

    </div>
  );
}

export default Login;