import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ButtonMotion from "../components/buttonMotion";
import TextMotion from "../components/textMotion";

export default function AboutME() {
  return (
    <div>
      <Layout>
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
            <div className={utilStyles.aboutText}>
              <p>
                I’m a{" "}
                <span className={utilStyles.highlightedText}>
                  web developer
                </span>{" "}
                and <span className={utilStyles.highlightedText}>designer</span>{" "}
                based in Minas Gerais, Brazil (GMT-3). <br /> Currently, I'm
                coursing Information Systems at the State University of <br />{" "}
                Montes Claros. <br />
                My experience working as an internet support technician has
                helped me <br />
                develop the ability to{" "}
                <span className={utilStyles.highlightedText}>
                  solve problems
                </span>{" "}
                that require{" "}
                <span className={utilStyles.highlightedText}>
                  fast analytical thinking
                </span>
                . <br />
                Besides writing code, I like to edit videos for fun.
              </p>
            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
}
