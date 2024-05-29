import React, { useContext } from "react";
import { GlobalStateContext } from "../context/Context";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";

function Home() {
  const { foodData, loading } = useContext(GlobalStateContext);

  if (loading) return <Loading />;

  console.log("foodData", foodData);

  return (
    <div className="container-xxl py-5 text-white">
      <div className="row">
        {foodData && foodData.length ? (
          foodData.map((item) => (
            <div className="col d-flex flex-column py-5 justify-center align-items-center  gap-2 p-2">
              <div
                className="d-flex justify-center flex-column align-items-center "
                style={{ height: "260px", width: "260px" }}
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="border rounded-circle border-light border-5"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="d-flex gap-3 justify-center text-center align-items-center fs-6 flex-column">
                <span className="text-warning">{item.publisher}</span>
                <span className="fs-5 fw-bold">{item.title}</span>
                <div className="py-2 px-4 rounded-pill bg-success ">
                  <Link
                    to={`/recipe-item/${item.id}`}
                    className="text-decoration-none text-uppercase text-white"
                  >
                    Recipe Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="d-flex p-5 justify-content-center"
            style={{ height: "500px", overflow: "hidden" }}
          >
            <h1>Not show Data Please Enter Any item ...</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
