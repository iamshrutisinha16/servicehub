function VendorDashboard() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Vendor Dashboard</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul</td>
            <td>AC Repair</td>
            <td>Pending</td>
            <td>
              <button className="btn btn-success btn-sm me-2">
                Accept
              </button>

              <button className="btn btn-primary btn-sm">
                Delivered
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VendorDashboard;