import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {

    try {

      const response = await fetch(
        "https://servicehub-dxk3.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Signup Successful");

        // 🔥 ROLE BASED REDIRECT AFTER SIGNUP
        if (formData.role === "vendor") {
          navigate("/vendor-login");
        } else {
          navigate("/login");
        }

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>

      <h2 className="mb-4 text-center">Signup</h2>

      <input
        name="name"
        placeholder="Enter Name"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Enter Email"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        className="form-control mb-3"
        onChange={handleChange}
      />

      {/* 🔥 ROLE DROPDOWN */}
      <select
        name="role"
        className="form-control mb-3"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="customer">Customer</option>
        <option value="vendor">Vendor</option>
      </select>

      <button
        className="btn btn-primary w-100"
        onClick={handleSignup}
      >
        Signup
      </button>

    </div>
  );
}

export default Signup;