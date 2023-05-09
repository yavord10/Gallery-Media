// import styles of this component
import styles from "./Nav.module.css";

// import other components
import Button from "../Elements/Button/Button";

// import other react pkg to use
import { HambergerMenu } from "iconsax-react";

// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
      <img
        src="./img/logo.png"
        alt="Logo"
        style={{ width: "100px", height: "100px", transform: "scaleX(-1)" }}
      />
      <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
        <li className={`${styles["nav-item"]} ${styles.active}`}>
          <a
            href="https://mindai-main.vercel.app/"
            className={styles["nav-link"]}
          >
            Home
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a
            href="https://mindaiapp.netlify.app/"
            className={styles["nav-link"]}
          >
            Presale
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a
            href="https://famous-zabaione-503ef4.netlify.app/"
            className={styles["nav-link"]}
          >
            Staking
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="" className={styles["nav-link"]}>
            Artists
          </a>
        </li>
        <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
          <a href="" className={styles["nav-link"]}>
            Explore
          </a>
        </li>
        <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
          <a href="" className={styles["nav-link"]}>
            Blog
          </a>
        </li>
      </ul>
      <div className={`flex ${styles["navbar-buttons"]}`}>
        <a href="https://mindai-main.vercel.app/">
          <Button theme="transparent">MindAI 3.0</Button>
        </a>
        <Button theme="matrix">Mint</Button>
      </div>
      <div className={styles["navbar-responsive-menu"]}>
        <Button theme="transparent">
          <HambergerMenu size="32" color="var(--white-100)" />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
