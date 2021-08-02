import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import OnStartMotion from "../components/onStartMotion";
import Image from "next/image";

export default function MyJobs() {
  return (
    <div>
      <div className="container">
        <Head>
          <title>My jobs</title>
          <link
            rel="preload"
            href="/fonts/Arcadepix/ARCADEPI.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>

        <main>
          <div className={utilStyles.worksComponentDiv}></div>
        </main>
      </div>
    </div>
  );
}
