import { useEffect, useState } from "react";

function VendorDashboard() {

  const [bookings, setBookings] = useState([]);

  // FETCH BOOKINGS

  const fetchBookings = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/bookings"
      );

      const data = await response.json();

      setBookings(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchBookings();

  }, []);




  // UPDATE STATUS

  const updateStatus = async (id, status) => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/bookings/${id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      alert(data.message);

      fetchBookings();

    } catch (error) {

      console.log(error);
    }
  };



  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        Vendor Dashboard
      </h2>

      <table className="table table-bordered">

        <thead className="table-dark">

          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking._id}>

              <td>{booking.customerName}</td>

              <td>{booking.service}</td>

              <td>

                <span
                  className={`badge ${
                    booking.status === "Pending"
                      ? "bg-warning"
                      : booking.status === "Accepted"
                      ? "bg-success"
                      : "bg-primary"
                  }`}
                >
                  {booking.status}
                </span>

              </td>

              <td>

                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() =>
                    updateStatus(
                      booking._id,
                      "Accepted"
                    )
                  }
                >
                  Accept
                </button>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    updateStatus(
                      booking._id,
                      "Delivered"
                    )
                  }
                >
                  Delivered
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default VendorDashboard;