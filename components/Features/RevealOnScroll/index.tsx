import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import { clsx } from "clsx";
import { ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const RevealOnScroll = ({ children, className, delay = 0 }: RevealOnScrollProps) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        "transform transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;