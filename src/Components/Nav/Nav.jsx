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
          <a href="https://mindaimusic.com" className={styles["nav-link"]}>
            Main website
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a
            href="https://presale.mindaimusic.com"
            className={styles["nav-link"]}
          >
            Presale
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a
            href="https://stake.mindaimusic.com"
            className={styles["nav-link"]}
          >
            Staking
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a
            href="https://mindai-music.gitbook.io/mindai-music-3/"
            className={styles["nav-link"]}
          >
            Litepaper
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
