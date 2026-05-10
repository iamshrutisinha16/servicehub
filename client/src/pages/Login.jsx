import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://https://servicehub-dxk3.onrender.com/api/users/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ phone }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Login Successful");

        navigate("/book");

      } else {

        alert(data.message);
      }

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{ maxWidth: "400px" }}>

        <h2 className="mb-4">
          Customer Login
        </h2>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Enter Phone Number"
            className="form-control mb-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

      </div>
    </>
  );
}

export default Login;