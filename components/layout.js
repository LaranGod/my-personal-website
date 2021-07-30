import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import OnStartMotion from "./onStartMotion";
import HoverMotion from "./hoverMotion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

const name = "Miguel";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.fullContainer}>
        {!home && (
          <header>
            <div className={styles.backToHomeDiv}>
              <Link href="/">
                <a>
                  <OnStartMotion>
                    <HoverMotion backHome>
                      <FontAwesomeIcon
                        icon="arrow-left"
                        className={styles.backToHome}
                      />
                    </HoverMotion>
                  </OnStartMotion>
                </a>
              </Link>
            </div>
          </header>
        )}
        <div className={styles.container}>
          <div className={styles.subContainer}>
            {home ? (
              <>
                <header className={styles.backToHomeDiv}></header>
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
          <div className={styles.footerDiv}>
            <OnStartMotion>
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className={styles.fontAw}
              />
            </OnStartMotion>
            <OnStartMotion>
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className={styles.fontAw}
              />
            </OnStartMotion>
            <OnStartMotion>
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className={styles.fontAw}
              />
            </OnStartMotion>
            <OnStartMotion>
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className={styles.fontAw}
              />
            </OnStartMotion>
          </div>
        </footer>
      </div>
    </>
  );
}
