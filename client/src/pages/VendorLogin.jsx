import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VendorLogin() {

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

      const response = await fetch(
        "https://servicehub-dxk3.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

      // Save user locally
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // ROLE CHECK
      if (data.user.role === "vendor") {

        setMessage("Vendor Login Successful");

        navigate("/vendor-dashboard");

      } else {

        setMessage("Not a vendor account");

        navigate("/"); // customer redirect
      }

    } catch (error) {

      console.log(error);
      setMessage("Something went wrong");

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

        <h2 className="mb-4 text-center">
          Vendor Login
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
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          className="btn btn-warning w-100"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>

    </div>
  );
}

export default VendorLogin;