import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Fades content up the first time it scrolls into view.
function Reveal({ as = "div", delay = 0, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
