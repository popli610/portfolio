import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./CursorContext";
import "../index.css";

function Cursor() {
  const { cursorVariant } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "purple",
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    button: {
      height: 45,
      width: 45,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "purple",
      opacity:0.5,
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    />
  );
}

export default Cursor;
