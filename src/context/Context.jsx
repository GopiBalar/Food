import React, { children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalStateContext = createContext(null);

function Context({ children }) {
  const [search, setSearch] = useState("burger");
  const [loading, setLoading] = useState(false);
  const [foodData, setFoodData] = useState(true);
  const [foodDetails, setFoodDetails] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);

  const navigate = useNavigate(null);

  async function dataFetch() {
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

  useEffect(() => {
    dataFetch();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    dataFetch();
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
