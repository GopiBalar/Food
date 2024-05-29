import React, { children, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalStateContext = createContext(null);

function Context({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [foodData, setFoodData] = useState(false);
  const [foodDetails, setFoodDetails] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);

  const navigate = useNavigate(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      if (data) {
        setFoodData(data?.data?.recipes);
        setLoading(false);
        setSearch("");
        navigate("/");
      }
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
  }

  function handleAddFavourits(getCurrentItem) {
    const cpyFavourits = [...favouriteList];
    const index = cpyFavourits.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavourits.push(getCurrentItem);
    } else {
      cpyFavourits.splice(index);
    }
    setFavouriteList(cpyFavourits);
  }

  return (
    <GlobalStateContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        foodData,
        loading,
        foodDetails,
        setFoodDetails,
        handleAddFavourits,
        favouriteList,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export default Context;
