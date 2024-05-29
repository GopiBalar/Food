import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalStateContext } from "../context/Context";

function Detaile() {
  const { id } = useParams(null);
  const { foodDetails, setFoodDetails, handleAddFavourits, favouriteList } =
    useContext(GlobalStateContext);

  async function getFoodDetails() {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    if (data) {
      setFoodDetails(data?.data?.recipe);
    }
  }

  useEffect(() => {
    getFoodDetails();
  }, []);

  console.log(foodDetails);
  return (
    <div className="container-xxl py-5 px-5">
      <div className="row text-light ">
        <div className="col-8" style={{ height: "400px", width: "500px" }}>
          <img
            src={foodDetails?.image_url}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-4 d-flex flex-column gap-2 px-5">
          <span className="text-warning fs-5">{foodDetails?.publisher}</span>
          <span className="fs-1">{foodDetails?.title}</span>
          <div>
            <button
              className="btn py-2 px-5 rounded-pill fs-6 fw-bold  bg-success text-light border-0"
              onClick={() => {
                handleAddFavourits(foodDetails);
              }}
            >
              {favouriteList.findIndex((item) => item.id === foodDetails.id) !==
              -1
                ? "Remove from Favourite"
                : "Add to Favourite"}
            </button>
          </div>
          <div className="mt-2">
            <span className="fs-4">Ingrediants :</span>
            <ul>
              {foodDetails?.ingredients
                ? foodDetails.ingredients.map((items) => (
                    <li className="d-grid gap-1 p-1">
                      <span>
                        {items.quantity} {items.unit} {items.description}
                      </span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detaile;
