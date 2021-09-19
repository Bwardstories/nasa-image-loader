import React from "react";
import { motion } from "framer-motion";
import "./Backdrop.css";

// this is the backdrop for the modal, which is passed through props via children

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default Backdrop;
