import Navbar from "../components/Navbar";

function BookService() {
  return (
    <>
      <Navbar />

      <div
        className="container-fluid py-5"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to right, #f8fafc, #e2e8f0)",
        }}
      >

        <div className="container d-flex justify-content-center">

          <div
            className="card border-0 shadow-lg p-4"
            style={{
              width: "100%",
              maxWidth: "550px",
              borderRadius: "20px",
            }}
          >

            {/* HEADING */}

            <div className="text-center mb-4">

              <h2 className="fw-bold">
                Book a Service
              </h2>

              <p className="text-muted">
                Fill the details to book your service
              </p>

            </div>

            {/* FORM */}

            <div className="mb-3">

              <label className="form-label fw-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="form-control py-2"
                style={{
                  borderRadius: "12px",
                }}
              />

            </div>

            <div className="mb-3">

              <label className="form-label fw-semibold">
                Select Service
              </label>

              <select
                className="form-select py-2"
                style={{
                  borderRadius: "12px",
                }}
              >
                <option>AC Repair</option>
                <option>Plumbing</option>
                <option>Cleaning</option>
                <option>Electrician</option>
              </select>

            </div>

            <div className="mb-3">

              <label className="form-label fw-semibold">
                Address
              </label>

              <textarea
                rows="4"
                placeholder="Enter your address"
                className="form-control"
                style={{
                  borderRadius: "12px",
                }}
              ></textarea>

            </div>

            <div className="mb-4">

              <label className="form-label fw-semibold">
                Booking Date
              </label>

              <input
                type="date"
                className="form-control py-2"
                style={{
                  borderRadius: "12px",
                }}
              />

            </div>

            {/* BUTTON */}

            <button
              className="btn btn-primary w-100 py-2 fw-semibold"
              style={{
                borderRadius: "12px",
                fontSize: "18px",
              }}
            >
              Book Now
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default BookService;