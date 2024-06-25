import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GlobalStateContext } from "../context/Context";

function Navbar() {
  const { search, setSearch, handleSubmit, foodData } =
    useContext(GlobalStateContext);
  console.log(foodData);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success text-light">
      <div className="container-fluid ">
        <Link className="navbar-brand" href="#">
          <h1>FoodRecipe</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/favourite"}>
                Favourite
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              style={{
                boxShadow:
                  "box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;",
              }}
              className="form-control me-2 p-2 outline-none form-control px-4 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    // <div classNameNameName="p-1 bg-success text-light ">
    //   <div classNameNameName="d-flex flex-col justify-content-between align-items-center ml-3 ">
    //
    //     <button
    //       classNameName="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span classNameName="navbar-toggler-icon"></span>
    //     </button>

    //     <form onSubmit={handleSubmit} classNameNameName="d-flex col-sm-3 px-2 m-3 ">
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         classNameNameName="p-2 outline-none rounded-pill form-control px-4 me-2 fw-bold "
    //         style={{
    //           boxShadow:
    //             "box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;",
    //         }}
    //         value={search}
    //         onChange={(e) => {
    //           setSearch(e.target.value);
    //         }}
    //       />
    //     </form>
    //     <ul classNameNameName="d-flex justify-content-between gap-5 fs-5 px-5 py-3 fw-normal list-style-none">
    //       <li classNameNameName=" list-group">
    //         <NavLink to={"/"} classNameNameName="text-decoration-none text-white">
    //           Home
    //         </NavLink>
    //       </li>
    //       <li classNameNameName="list-group">
    //         <NavLink
    //           to={"/favourite"}
    //           classNameNameName="text-decoration-none text-white"
    //         >
    //           Favourite
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Navbar;
