import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import OnStartMotion from "../components/onStartMotion";
import HoverMotion from "../components/hoverMotion";
import Image from "next/image";
import Link from "next/link";

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
                <Link href="https://github.com/LaranGod/InfoCepReact">
                <img
                    priority
                    src="/images/Infocep.jpeg"
                    height="auto"
                    width="auto"
                  />
                </Link>
                  
                  
                </HoverMotion>
              </div>
              <div className={utilStyles.workComponent}>
                <HoverMotion workImage>
                <Link href="https://github.com/LaranGod/UploadMaterialForm">
                  <img
                    priority
                    src="/images/Material_Form.jpeg"
                    height="auto"
                    width="auto"
                  />
                  </Link>
                </HoverMotion>
              </div>
              <div className={utilStyles.workComponent}>
                <HoverMotion workImage>
                <Link href="https://dribbble.com/shots/15876555-Rent">
                  <img
                    priority
                    src="/images/Rent_mobile.png"
                    height="auto"
                    width="auto"
                  />
                  </Link>
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