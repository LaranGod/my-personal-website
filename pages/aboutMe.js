import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import OnStartMotion from "../components/onStartMotion";
import HoverMotion from "../components/hoverMotion";
import Link from "next/dist/client/link";

export default function AboutME() {
  return (
    <div>
      <Layout>
        <div className="container">
          <Head>
            <title>About Me</title>
            <link
              rel="preload"
              href="/fonts/Arcadepix/ARCADEPI.ttf"
              as="font"
              crossOrigin=""
            />
          </Head>

          <main>
            <div className={utilStyles.subContainer}>
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
                      />
                    </HoverMotion>
                  </a>
                </OnStartMotion>
              </Link>
            </div>

            <div className={utilStyles.aboutText}>
              <OnStartMotion>
                <p>
                  I’m a{" "}
                  <span className={utilStyles.highlightedText}>
                    web developer
                  </span>{" "}
                  and{" "}
                  <span className={utilStyles.highlightedText}>designer</span>{" "}
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
              </OnStartMotion>
            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
}
