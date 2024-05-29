import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalStateContext } from "../context/Context";

function Navbar() {
  const { search, setSearch, handleSubmit, foodData } =
    useContext(GlobalStateContext);
  console.log(foodData);

  return (
    <div className="p-2 bg-success text-light">
      <div className="d-flex flex-col justify-content-between align-items-center ml-3 ">
        <h1>FoodRecipe</h1>
        <form onSubmit={handleSubmit} className="d-flex  col-sm-3 px-2 m-3 ">
          <input
            type="text"
            placeholder="Search"
            className="p-2 outline-none rounded-pill form-control px-4 me-2 fw-bold"
            style={{
              boxShadow:
                "box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;",
            }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <ul className="d-flex justify-content-between gap-5 fs-5 px-5 py-3 fw-normal list-style-none">
          <li className=" list-group">
            <NavLink to={"/"} className="text-decoration-none text-white">
              Home
            </NavLink>
          </li>
          <li className="list-group">
            <NavLink
              to={"/favourite"}
              className="text-decoration-none text-white"
            >
              Favourite
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
