import styles from "./layout.module.css";
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

export default function Layout({ children, home, myJobs }) {
  return (
    <>
      <div>
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
        {!myJobs ? (
          <div className={styles.container}>
            <div>{children}</div>
          </div>
        ) : (
          <div className={styles.containerJobs}>
            <div>{children}</div>
          </div>
        )}

        <footer className={styles.homeFooter}>
          <div className={styles.footerDiv}>
            <OnStartMotion>
              <HoverMotion sMediaIcon>
                <a
                  href="https://www.linkedin.com/in/miguel-am%C3%A2ncio-951420213/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className={styles.fontAw}
                  />
                </a>
              </HoverMotion>
            </OnStartMotion>
            <OnStartMotion>
              <HoverMotion sMediaIcon>
                <a href="https://github.com/LaranGod/" target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className={styles.fontAw}
                  />
                </a>
              </HoverMotion>
            </OnStartMotion>
            <OnStartMotion>
              <HoverMotion sMediaIcon>
                <a
                  href="https://www.instagram.com/miguelcunha05/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className={styles.fontAw}
                  />
                </a>
              </HoverMotion>
            </OnStartMotion>
            <OnStartMotion>
              <HoverMotion sMediaIcon>
                <a
                  href="https://www.facebook.com/miguel.cunha.5243817"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className={styles.fontAw}
                  />
                </a>
              </HoverMotion>
            </OnStartMotion>
          </div>
        </footer>
      </div>
    </>
  );
}
