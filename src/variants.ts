export const fadeVariant = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : -100,
      opacity: 0,
      x: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        delay: delay,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0px 8px rgb(113, 91, 232)",
    },
  };
};

export const shadowVariant = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : -100,
      opacity: 0,
      x: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        delay: delay,
        ease: "easeInOut",
      },
      boxShadow: "0 0px 8px rgb(113, 91, 232)",
    },
  };
};

export const staggerVariant = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : -100,
      opacity: 0,
      x: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: delay,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };
};
