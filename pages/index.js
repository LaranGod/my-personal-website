import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ButtonMotion from "../components/buttonMotion";
import TextMotion from "../components/textMotion";

const ButtonAbout = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <button className={utilStyles.buttom}>
        About <span className={utilStyles.highlightedText}>Me</span>
      </button>
    </a>
  );
});

const ButtonMyJobs = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <button className={utilStyles.buttom}>
        My <span className={utilStyles.highlightedText}>jobs</span>
      </button>
    </a>
  );
});

export default function Home() {
  return (
    <div className={utilStyles.fullContainer}>
      <Layout home>
        <div className="container">
          <Head>
            <title>Larangod</title>
            <link
              rel="preload"
              href="/fonts/Arcadepix/ARCADEPI.ttf"
              as="font"
              crossOrigin=""
            />
          </Head>

          <main>
            <TextMotion>
              <p className={utilStyles.strHome}>
                I’m a Brazilian{" "}
                <span className={utilStyles.highlightedText}>
                  Software developer
                </span>
                .
              </p>
              <p className={utilStyles.strHomeAnd}>And</p>
              <p className={utilStyles.strHome}>
                this site is a{" "}
                <span className={utilStyles.highlightedText}>
                  piece of my mind
                </span>
                .
              </p>
            </TextMotion>
            <div className="grid"></div>
          </main>

          <div className={utilStyles.buttonsSection}>
            <TextMotion>
              <ButtonMotion>
                <Link href="/about" passHref>
                  <ButtonAbout />
                </Link>
              </ButtonMotion>
            </TextMotion>
            <TextMotion>
              <ButtonMotion>
                <Link href="/about" passHref>
                  <ButtonMyJobs />
                </Link>
              </ButtonMotion>
            </TextMotion>
          </div>
        </div>
      </Layout>
      <footer className={utilStyles.homeFooter}>
        <div className={utilStyles.footerDiv}>
          <p>test test</p>
        </div>
      </footer>
    </div>
  );
}
