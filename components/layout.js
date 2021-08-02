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
          </div>
          <main>{children}</main>
        </div>
        <footer className={styles.homeFooter}>
          <div className={styles.footerDiv}>
            <OnStartMotion>
              <HoverMotion sMediaIcon>
                <Link href="https://www.linkedin.com/in/miguel-am%C3%A2ncio-951420213/">
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className={styles.fontAw}
                  />
                </Link>
              </HoverMotion>
            </OnStartMotion>
            <OnStartMotion>
              <HoverMotion sMediaIcon>
                <Link href="https://github.com/LaranGod/">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className={styles.fontAw}
                  />
                </Link>
              </HoverMotion>
            </OnStartMotion>
            <OnStartMotion>
              <HoverMotion sMediaIcon>
                <Link href="https://www.instagram.com/miguelcunha05/">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className={styles.fontAw}
                  />
                </Link>
              </HoverMotion>
            </OnStartMotion>
            <OnStartMotion>
              <HoverMotion sMediaIcon>
                <Link href="https://www.facebook.com/miguel.cunha.5243817">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className={styles.fontAw}
                  />
                </Link>
              </HoverMotion>
            </OnStartMotion>
          </div>
        </footer>
      </div>
    </>
  );
}
