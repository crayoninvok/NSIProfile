// fadeInUp.ts

export const fadeInUp = {
  hidden: (isMobile: boolean) => ({
    opacity: 0,
    y: isMobile ? 20 : 50, // Smaller offset on mobile for a subtler effect
  }),
  visible: (isMobile: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.6 : 0.8, // Faster animation on mobile
      ease: "easeOut",
    },
  }),
};
