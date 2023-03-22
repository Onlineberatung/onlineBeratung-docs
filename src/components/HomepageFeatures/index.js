import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Nutzer - Handbuch",
    Svg: require("@site/static/img/documentation.svg").default,
    description: <>Stand: 22. Februar 2023 Dokumentversion: SozPS006</>,
  },

  {
    title: "Admin - Handbuch",
    Svg: require("@site/static/img/documentation.svg").default,
    description: <>Stand: 22. Februar 2023 Dokumentversion: SozPS006</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className={styles.icon}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--primary button--small"
          to="/docs/docs/intro"
        >
          Zum Handbuch
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
