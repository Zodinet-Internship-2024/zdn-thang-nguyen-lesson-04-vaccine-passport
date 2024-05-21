import logoCucCNTTBYT from "../../../assets/images/logo_CucCNTTBYT.svg";
import logoHeart from "../../../assets/images/logo.svg";

import Organization from "../../organization/organization";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__organizations}>
        <Organization
          logoSrc={logoCucCNTTBYT}
          altText={"Cục CNTT Bộ Y Tế"}
          name={"Cục CNTT Bộ Y Tế"}
        />
        <Organization
          logoSrc={logoHeart}
          altText={"Việt Nam khỏe mạnh"}
          name={"Việt Nam khỏe mạnh"}
        />
      </section>

      <section className={styles.header__links}>
        <p>Trang chủ</p>
        <p>Giới thiệu</p>
        <p>Flags</p>
      </section>
    </header>
  );
};

export default Header;
