import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CountryCard from "../../components/CountryCard/CountryCard";
import styles from "./Home.module.css";
import axios from "axios";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    performApiCall();
  }, []);

  const performApiCall = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
      {countries.map((item)=><CountryCard data={item}/>)}
      </div>
    </div>
  );
};
export default Home;
