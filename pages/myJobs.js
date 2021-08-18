import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import OnStartMotion from "../components/onStartMotion";
import Image from "next/image";

export default function MyJobs() {
  return (
    <div className={utilStyles.fullContainer}>
      <Layout myJobs>
        
      {/* <div className="container"> */}
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
            <div className={utilStyles.worksComponentDiv}>
              {/* <img
                priority
                className={utilStyles.workComponent}
                src="/images/jobSection.png"
          
                width="30%"
              />
              <img
                priority
                className={utilStyles.workComponent}
                src="/images/jobSection.png"
                
                width="30%"
              />
              <img
                priority
                className={utilStyles.workComponent}
                src="/images/jobSection.png"
         
                width="30%"
              /> */}
              <div className={utilStyles.workComponent}>

              </div>
              <div className={utilStyles.workComponent}>

              </div>
              <div className={utilStyles.workComponent}>

              </div>
            </div>
          
        </main>
      {/* </div> */}
      </Layout>
    </div>
  );
}
