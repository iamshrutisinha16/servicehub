import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VendorLogin() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {

    try {

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

      if (response.ok) {

        // CHECK ROLE

        if (data.user.role !== "vendor") {

          alert("Access Denied! Vendor only.");

          return;
        }

        alert("Vendor Login Successful");

        navigate("/vendor-dashboard");

      } else {

        alert(data.message);
      }

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "400px" }}
    >

      <h2 className="mb-4 text-center">
        Vendor Login
      </h2>

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
      >
        Login
      </button>

    </div>
  );
}

export default VendorLogin;