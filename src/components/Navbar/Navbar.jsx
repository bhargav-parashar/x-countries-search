import React, { useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({searchText,filterCountries}) => {
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const handleChange = (e)=>{
    filterCountries(e.target.value);
  }
  return (
    <div className={styles.wrapper}>
      <input ref={inputRef} className={styles.navbar} type="text" placeholder=" Search" value={searchText} onChange={handleChange}/>
    </div>
  );
};
export default Navbar;
