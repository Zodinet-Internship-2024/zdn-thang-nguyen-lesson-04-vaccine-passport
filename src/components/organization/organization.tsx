import React from "react";

import styles from "./styles.module.css";

interface OrganizationProps {
  logoSrc: string;
  altText: string;
  name: string;
}

const Organization: React.FC<OrganizationProps> = ({
  logoSrc,
  altText,
  name,
}) => {
  return (
    <div className={styles.organization}>
      <img className={styles.organization__image} src={logoSrc} alt={altText} />
      <strong className={styles.organization__name}>{name}</strong>
    </div>
  );
};

export default Organization;
