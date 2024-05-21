import logoCucCNTTBYT from "../../../assets/images/logo_CucCNTTBYT.svg";
import logoHeart from "../../../assets/images/logo.svg";
import iconFacebook from "../../../assets/images/facebook.svg";
import imageCertificate from "../../../assets/images/certificate.png";
import iconC from "../../../assets/images/c.svg";

import Organization from "../../organization/organization";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__descriptions}>
        <div className={styles.content}>
          <div className={styles.content__text}>
            <img className={styles.iconC} src={iconC} alt="icon C" />
            <p className={styles.author}>
              Bản quyền thuộc TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19
              QUỐC GIA
            </p>
          </div>

          <p className={styles.content__by}>Phát triển bởi: Galaxy Digital</p>
        </div>

        <div>
          <p className={styles.follow}>
            Theo dõi chúng tôi: <img src={iconFacebook} alt="icon facebook" />
          </p>
        </div>
      </section>

      <section className={styles.footer__organizations}>
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
      <section className={styles.footer__links}>
        <img src={imageCertificate} alt="image Certificate" />
        <p>www.vietnamkhoemanh.vn</p>
      </section>
    </footer>
  );
};

export default Footer;
