import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import OnStartMotion from "../components/onStartMotion";
import HoverMotion from "../components/hoverMotion";
import Image from "next/image";

export default function MyJobs() {
  return (
    <div className={utilStyles.pageBackground}>
      <Layout myJobs>
        {/* <div className="container"> */}
        <Head>
          <title>My jobs</title>
          <link
            rel="preload"
            href="/fonts/Mandalore/mandalore.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Noto-Sans/NotoSans-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>

        <main>
          <OnStartMotion title>
            <h1 className={utilStyles.headingPres}>
              My <span className={utilStyles.myName}>Projects</span>.
            </h1>
          </OnStartMotion>

          <OnStartMotion>
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
                <HoverMotion workImage>
                  <a
                    href="https://github.com/LaranGod/UploadMaterialForm"
                    target="_blank"
                  >
                    <img
                      className={utilStyles.jobImage}
                      priority
                      src="/images/Infocep.jpeg"
                      height="auto"
                      width="auto"
                    />
                  </a>
                </HoverMotion>
              </div>
              <div className={utilStyles.workComponent}>
                <HoverMotion workImage>
                  <a
                    href="https://dribbble.com/shots/15876555-Rent"
                    target="_blank"
                  >
                    <img
                      className={utilStyles.jobImage}
                      priority
                      src="/images/Material_Form.jpeg"
                      height="auto"
                      width="auto"
                    />
                  </a>
                </HoverMotion>
              </div>
              <div className={utilStyles.workComponent}>
                <HoverMotion workImage>
                  <a
                    href="https://dribbble.com/shots/15876555-Rent"
                    target="_blank"
                  >
                    <img
                      className={utilStyles.jobImage}
                      priority
                      src="/images/Rent_mobile.png"
                      height="auto"
                      width="auto"
                    />
                  </a>
                </HoverMotion>
              </div>
            </div>
          </OnStartMotion>
        </main>
        {/* </div> */}
      </Layout>
    </div>
  );
}
