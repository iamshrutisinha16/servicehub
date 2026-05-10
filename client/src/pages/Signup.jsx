import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
        "https://servicehub-dxk3.onrender.com/api/users/create",
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

        navigate("/login");

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

      <h2 className="mb-4">
        Customer Signup
      </h2>

      <input
        type="text"
        placeholder="Enter Name"
        className="form-control mb-3"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        className="form-control mb-3"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

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