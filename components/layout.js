import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import TextMotion from "./textMotion";

const name = "Miguel";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <TextMotion title>
                <Image
                  priority
                  src="/images/Mando.jpg"
                  className={utilStyles.borderCircle}
                  height={200}
                  width={200}
                  alt={name}
                />
              </TextMotion>
              <TextMotion title>
                <h1 className={utilStyles.headingPres}>
                  Hello there! My name is{" "}
                  <span className={utilStyles.myName}>Miguel</span>.
                </h1>
              </TextMotion>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/ProfilePic.jpg"
                    className={utilStyles.borderCircle}
                    height={200}
                    width={200}
                    alt={name}
                  />
                </a>
              </Link>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={UtilStyles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
