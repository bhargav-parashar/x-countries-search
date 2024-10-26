import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CountryCard from "../../components/CountryCard/CountryCard";
import styles from "./Home.module.css";
import navStyles from "../../components/Navbar/Navbar.module.css";
import axios from "axios";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(0);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
      setFilteredCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterCountries = async (searchText) => {
    // const url = `https://restcountries.com/v3.1/name/${searchText}?fields=name,flags`;
    // try{
    //   const filteredResp = await axios.get(url);
    //   setFilteredCountries(filteredResp.data);
    // }catch(err){
    //   console.log(err);
    // }
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

  const debounceSearch = (e, debounceTimeout)=>{
    const text = e.target.value;
    if(debounceTimeout){
      clearTimeout(debounceTimeout);
    }
      const timeout = setTimeout(()=>{
        filterCountries(text);
      },500);
      setDebounceTimeout(timeout);
    
  };

  console.log(document.getElementsByClassName("countryCard"));


  return (
    <div>
      <Navbar>
        <input
          ref={inputRef}
          className={navStyles.navbar}
          type="text"
          placeholder=" Search"
          onChange={(e) => debounceSearch(e, debounceTimeout)}
        />
      </Navbar>
      <div className={styles.wrapper}>
        {filteredCountries.map((item) => (
          <CountryCard data={item} key={item.flag} />
        ))}
      </div>
    </div>
  );
};
export default Home;
