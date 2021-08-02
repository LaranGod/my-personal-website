import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import HoverMotion from "../components/hoverMotion";
import OnStartMotion from "../components/onStartMotion";

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
    <div>
      <header className={utilStyles.headerDiv}></header>
      <Layout home>
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
            <OnStartMotion>
              <p className={utilStyles.strHome}>
                I’m a Brazilian{" "}
                <span className={utilStyles.highlightedText}>
                  Software developer
                </span>{" "}
                <br /> <span className={utilStyles.strHomeAnd}>and</span> <br />
                this site is a piece of my mind .
              </p>
            </OnStartMotion>
            <div className="grid"></div>
          </main>

          <div className={utilStyles.buttonsSection}>
            <OnStartMotion>
              <HoverMotion>
                <Link href="/aboutMe" passHref>
                  <ButtonAbout />
                </Link>
              </HoverMotion>
            </OnStartMotion>
            <OnStartMotion>
              <HoverMotion>
                <Link href="/myJobs" passHref>
                  <ButtonMyJobs />
                </Link>
              </HoverMotion>
            </OnStartMotion>
          </div>
        </div>
      </Layout>
    </div>
  );
}
