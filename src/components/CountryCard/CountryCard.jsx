import React from "react";
import styles from "./CountryCard.module.css";


const CountryCard = ({data}) => {
 return (
    <div className={styles.countryCard}>
        <img src={data.flags.png} alt={`Flag of ${data.name.common}`} />
        <h3>{data.name.common}</h3>
       
    </div>
  );
};
export default CountryCard;
