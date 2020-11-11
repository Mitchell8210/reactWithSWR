import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import SingleDrink from "./SingleDrink";

const useStyles = makeStyles({
  container: {
    color: "white",
  },
  title: {
    textAlign: "center",
  },
  searchBar: {
    padding: 20,
    border: "1px solid black",
  },
  input: {
    background: "black",
    fontSize: 20,
    padding: 5,
    width: 300,
    color: "white",
    outline: "none",
  },
  button: {
    fontSize: 20,
    padding: 5,
    background: "#30475e",
    color: "white",
    cursor: "pointer",
    outline: "none",
  },
  dataBox: {
    padding: 20,
    border: "1px solid black",
  },
  dataItem: {
    padding: 5,
    background: "#30475e",
    border: "1px solid #f2a365",
    color: "#ececec",
    cursor: "pointer",
    "&:hover": {
      background: "#222831",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState("tequila");
  const [selectedDrink, setSelectedDrink] = useState("");
  const { data, error } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searching}`,
    fetcher
  );
  const handleSearch = () => {
    setSearching(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Search for your favorite drinks!</h2>
      <div className={classes.searchBar}>
        <input
          type="text"
          className={classes.input}
          placeholder="ex. Tequila"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button className={classes.button} onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className={classes.dataBox}>
        {error && <div>ERRRRROORRRR.</div>}
        {!data && <div>LOADING......</div>}
        {data &&
          data.drinks.map((data, index) => (
            <div
              className={classes.dataItem}
              key={index}
              onClick={() => setSelectedDrink(data.strDrink)}
            >
              {data.strDrink}
            </div>
          ))}
      </div>
      {selectedDrink !== "" && <SingleDrink drink={selectedDrink} />}
    </div>
  );
}
