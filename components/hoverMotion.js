import { motion } from "framer-motion";
import styles from "./hoverMotion.module.css";

export default function HoverMotion({ children, image, backHome, sMediaIcon, workImage }) {
  return (
    <>
      {backHome ? (
        <motion.div
          className={styles.backHomeMotion}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          {children}
        </motion.div>
      ) : image ? (
        <motion.div
          className={styles.imageMotion}
          whileHover={{
            position: "relative",
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}
        >
          {children}
        </motion.div>
      ) : sMediaIcon ? (
        <motion.div
          className={styles.backHomeMotion}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          {children}
        </motion.div>
      ) : workImage ? (
        <motion.div
          className={styles.workImage}
          whileHover={{
            position: "relative",
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          className={styles.buttonMotion}
          whileHover={{
            position: "relative",
            scale: 1.2,
            backgroundColor: "rgba(8, 192, 233, 0.1)",
            transition: {
              duration: 0.2,
            },
          }}
        >
          {children}
        </motion.div>
      ) }
    </>
  );
}
