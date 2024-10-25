import React, { useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.wrapper}>
      <input ref={inputRef} className={styles.navbar} type="text" />
    </div>
  );
};
export default Navbar;
