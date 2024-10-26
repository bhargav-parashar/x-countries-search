import React from "react";

const CountryCard = ({data}) => {
  const styles={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid gray",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    borderRadius: "5px",
    width: "200px",
    height: "200px",
    textAlign: "center",
    padding: "10px",
    margin: "10px"
    
}
 return (
    <div className="countryCard" style={styles}>
        <img 
        src={data.flags.png} 
        alt={`Flag of ${data.name.common}`} 
        style={{width:"100px", height:"100px"}}  
        />
        <h3>{data.name.common}</h3>
        
    </div>
  );
};
export default CountryCard;
