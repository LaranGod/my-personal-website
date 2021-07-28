import { motion } from "framer-motion";

export default function ButtonMotion({ children }) {
  return (
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
  );
}
