import styles from "./Navbar.module.css";

const Navbar = ({children}) => {
  
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};
export default Navbar;
