import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const services = [
    {
      title: "AC Repair",
      desc: "Fast and reliable AC repair service",
      icon: "❄️",
    },
    {
      title: "Plumbing",
      desc: "Professional plumbing solutions",
      icon: "🚿",
    },
    {
      title: "Cleaning",
      desc: "Expert home cleaning service",
      icon: "🧹",
    },
    {
      title: "Electrician",
      desc: "Trusted electrical experts",
      icon: "💡",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <div
        className="container-fluid"
        style={{
          background:
            "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6dd5ed 100%)",
          minHeight: "90vh",
        }}
      >

        <div className="container">

          <div
            className="row align-items-center"
            style={{
              minHeight: "90vh",
            }}
          >

            {/* LEFT SIDE */}

            <div className="col-md-6 text-white">

              <span
                className="badge bg-light text-primary px-3 py-2 mb-4"
                style={{
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                Trusted by 10,000+ Customers
              </span>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "65px",
                  lineHeight: "1.2",
                }}
              >
                Book Trusted
                <br />
                Home Services
              </h1>

              <p
                className="mt-4"
                style={{
                  fontSize: "20px",
                  opacity: "0.9",
                }}
              >
                Fast, affordable and reliable home services
                at your doorstep with expert professionals.
              </p>

              <div className="mt-4">

                <button
                  className="btn btn-light btn-lg px-4 py-2 fw-semibold me-3"
                  onClick={() => navigate("/book")}
                  style={{
                    borderRadius: "12px",
                  }}
                >
                  Book Now
                </button>

                <button
                  className="btn btn-outline-light btn-lg px-4 py-2"
                  style={{
                    borderRadius: "12px",
                  }}
                >
                  Explore Services
                </button>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="col-md-6 text-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                alt="service"
                style={{
                  width: "90%",
                  filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))",
                }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* SERVICES SECTION */}

      <div className="container py-5">

        <div className="text-center mb-5">

          <h2
            className="fw-bold"
            style={{
              fontSize: "45px",
            }}
          >
            Popular Services
          </h2>

          <p
            className="text-muted mt-3"
            style={{
              fontSize: "18px",
            }}
          >
            Choose from our top-rated professional services
          </p>

        </div>

        <div className="row">

          {services.map((service, index) => (

            <div className="col-md-3 mb-4" key={index}>

              <div
                className="card border-0 shadow-lg h-100"
                style={{
                  borderRadius: "20px",
                  transition: "0.4s",
                }}
              >

                <div className="card-body text-center p-4">

                  <div
                    style={{
                      fontSize: "60px",
                    }}
                  >
                    {service.icon}
                  </div>

                  <h4 className="fw-bold mt-3">
                    {service.title}
                  </h4>

                  <p className="text-muted mt-3">
                    {service.desc}
                  </p>

                  <button
                    className="btn btn-primary mt-3 w-100 py-2"
                    style={{
                      borderRadius: "12px",
                    }}
                    onClick={() => navigate("/book")}
                  >
                    Book Service
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}

      <div
        className="text-center text-white py-4"
        style={{
          backgroundColor: "#0f172a",
        }}
      >
        <h5>ServiceHub</h5>
        <p className="mb-0">
          Trusted Home Services Platform
        </p>
      </div>
    </>
  );
}

export default Home;