"use client";
import { motion } from "framer-motion";
export enum skeletonTypes {
  text,
  square,
  circle,
}
interface ISkeleton {
  type: skeletonTypes;
  rows?: number;
  width?: string;
  height?: string;
  boarderRadius?: number;
}

const Skeleton = ({ type, rows, width, height, boarderRadius }: ISkeleton) => {
  const skeletonText = (rows = 2, width = "100%", height = "16px") => {
    const rowsArray = Array.from({ length: rows }, (_, index) => index);
    const addMargin = rows > 1 ? "4px" : "0px";

    return rowsArray.map((_, index) => (
      <motion.div
        key={index}
        initial={{ background: "rgba(0,0,0,0.1)" }}
        animate={{ background: "rgba(0,0,0,0.3)" }}
        style={{ width: width, height: height, marginBottom: addMargin }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>
    ));
  };
  const skeletonSquare = (
    width = "100%",
    height = "100%",
    boarderRadius = 0
  ) => {
    return (
      <motion.div
        initial={{ background: "rgba(0,0,0,0.1)" }}
        animate={{ background: "rgba(0,0,0,0.3)" }}
        style={{
          width: width,
          height: height,
          borderRadius: `${boarderRadius}px`,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>
    );
  };

  const skeletonCircle = (width = "100%", height = "100%") => {
    return (
      <motion.div
        initial={{ background: "rgba(0,0,0,0.1)" }}
        animate={{ background: "rgba(0,0,0,0.3)" }}
        style={{ width: width, height: height, borderRadius: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>
    );
  };

  const getSkeleton = (type: skeletonTypes) => {
    switch (type) {
      case skeletonTypes.text:
        return skeletonText(rows, width, height);
      case skeletonTypes.square:
        return skeletonSquare(width, height, boarderRadius);
      case skeletonTypes.circle:
        return skeletonCircle(width, height);
    }
  };

  return <>{getSkeleton(type)}</>;
};

export default Skeleton;
