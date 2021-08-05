import { motion } from "framer-motion";

export default function HoverMotion({ children, image, backHome, sMediaIcon }) {
  return (
    <>
      {backHome ? (
        <motion.div
          className="backHomeMotion"
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
          className="imageMotion"
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
          className="backHomeMotion"
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          className="buttonMotion"
          whileHover={{
            position: "relative",
            scale: 1.2,
            backgroundColor: "rgba(30, 100, 255, 0.5)",
            transition: {
              duration: 0.2,
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
