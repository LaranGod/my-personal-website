import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import OnStartMotion from "../components/onStartMotion";
import HoverMotion from "../components/hoverMotion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

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
                  <a className={utilStyles.linkNames}
                    href="https://github.com/LaranGod/UploadMaterialForm"
                    target="_blank"
                  >
                    <img
                      className={utilStyles.jobImage}
                      src="/images/Infocep.jpeg"
                      
                    />
                    Infocep
                  </a>

                  <div className={utilStyles.techIcons}>
                    <FontAwesomeIcon
                      icon={["fab", "react"]}
                      className={utilStyles.techIcon}
                    />

                    <FontAwesomeIcon
                      icon={["fab", "node"]}
                      className={utilStyles.techIcon}
                    />
                  </div>
                </HoverMotion>
              </div>
              <div className={utilStyles.workComponent}>
                <HoverMotion workImage>
                  <a className={utilStyles.linkNames}
                    href="https://github.com/LaranGod/UploadMaterialForm"
                    target="_blank"
                  >
                    <img
                      className={utilStyles.jobImage}
                      src="/images/Material_Form.jpeg"
                      height="auto"
                      width="auto"
                    />
                    Material Form
                  </a>
                  <div className={utilStyles.techIcons}>
                    <FontAwesomeIcon
                      icon={["fab", "react"]}
                      className={utilStyles.techIcon}
                    />
                  </div>
                </HoverMotion>
              </div>
              <div className={utilStyles.workComponent}>
                <HoverMotion workImage>
                  <a className={utilStyles.linkNames}
                    href="https://dribbble.com/shots/15876555-Rent"
                    target="_blank"
                  >
                    <img
                      className={utilStyles.jobImage}
                      src="/images/Rent_mobile.png"
                     
                    />
                    Rent Mobile
                  </a>
                  <div className={utilStyles.techIcons}>
                    <FontAwesomeIcon
                      icon={["fab", "figma"]}
                      className={utilStyles.techIcon}
                    />
                    <img 
                    className={utilStyles.techIcon}
                    src="images/ps.png"
                    >
                    </img>
                  </div>
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
