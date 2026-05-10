function VendorLogin() {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      
      <h2 className="mb-4 text-center">Vendor Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        className="form-control mb-3"
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="form-control mb-3"
      />

      <button className="btn btn-warning w-100">
        Login
      </button>

    </div>
  );
}

export default VendorLogin;