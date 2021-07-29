import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import OnStartMotion from "./onStartMotion";
import HoverMotion from "./hoverMotion";

const name = "Miguel";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.fullContainer}>
      {!home && (
        <header className={styles.backToHome}>
          <FontAwesomeIcon icon="twitter" />
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={["twitter"]} />
            </a>
          </Link>
        </header>
      )}
      <div className={styles.container}>
        <div className={styles.subContainer}>
          {home ? (
            <>
              <OnStartMotion title>
                <HoverMotion image>
                  <Image
                    priority
                    src="/images/Mando.jpg"
                    className={utilStyles.borderCircle}
                    height={200}
                    width={200}
                    alt={name}
                  />
                </HoverMotion>
              </OnStartMotion>
              <OnStartMotion title>
                <h1 className={utilStyles.headingPres}>
                  Hello there! My name is{" "}
                  <span className={utilStyles.myName}>Miguel</span>.
                </h1>
              </OnStartMotion>
            </>
          ) : (
            <>
              <Link href="/">
                <OnStartMotion title>
                  <a>
                    <HoverMotion image>
                      <Image
                        priority
                        src="/images/ProfilePic.jpg"
                        className={utilStyles.borderCircle}
                        height={200}
                        width={200}
                        alt={name}
                      />
                    </HoverMotion>
                  </a>
                </OnStartMotion>
              </Link>
            </>
          )}
        </div>
        <main>{children}</main>
      </div>
      <footer className={styles.homeFooter}>
        <div className={utilStyles.footerDiv}>
          <p>test test</p>
        </div>
      </footer>
    </div>
  );
}
