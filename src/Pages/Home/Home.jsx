import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CountryCard from "../../components/CountryCard/CountryCard";
import styles from "./Home.module.css";
import axios from "axios";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    performApiCall();
  }, []);

  const performApiCall = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
      setFilteredCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterCountries = (searchText) => {
    setSearchText(searchText);
    if (!searchText) {
      setFilteredCountries(countries);
      return;
    }
    const arr = countries.filter((item) => {
      if (item.name.common.toLowerCase().includes(searchText.toLowerCase())) {
        return item;
      }
    });
    setFilteredCountries(arr);
  };

  return (
    <div>
      <Navbar
        setSearchText={setSearchText}
        searchText={searchText}
        filterCountries={filterCountries}
      />
      <div className={styles.wrapper}>
        {filteredCountries.map((item) => (
          <CountryCard data={item} />
        ))}
      </div>
    </div>
  );
};
export default Home;
