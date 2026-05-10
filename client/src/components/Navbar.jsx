import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg px-4 py-3"
      style={{
        background: "linear-gradient(90deg, #0f172a, #1e293b)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">

        {/* LOGO */}

        <Link
          className="navbar-brand fw-bold text-white"
          to="/"
          style={{
            fontSize: "32px",
            letterSpacing: "1px",
          }}
        >
          ServiceHub
        </Link>

        {/* RIGHT SIDE */}

        <div className="d-flex align-items-center gap-3">

          {/* CUSTOMER LOGIN */}

          <Link
            to="/login"
            className="btn btn-outline-light px-4 py-2 fw-semibold"
            style={{
              borderRadius: "12px",
              transition: "0.3s",
            }}
          >
            Customer Login
          </Link>

          {/* VENDOR LOGIN */}

          <Link
            to="/vendor-login"
            className="btn px-4 py-2 fw-semibold"
            style={{
              background: "#38bdf8",
              color: "#0f172a",
              borderRadius: "12px",
              border: "none",
            }}
          >
            Vendor Login
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;