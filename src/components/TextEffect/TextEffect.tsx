import React, { FC, ReactNode, useRef, useEffect } from "react";
import "./text-effect.scss";

export interface TextEffectProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "className"> {
  children?: ReactNode | undefined;
  className?: string | undefined;
  text?: string | undefined;
  color?: string | undefined;
}

const TextEffect: FC<TextEffectProps> = ({
  children,
  className,
  text,
  color,
  ...props
}) => {
  const elementRef: any = useRef(null);
  const blockRef: any = useRef(null);

  useEffect(() => {
    if (className) {
      className?.split(" ").forEach((element: String) => {
        elementRef.current.classList.add(element);
      });
    }

    // testing
    if (color) {
      blockRef.current.classList.add(`text-effect--${color}`);
    }
    // testing
  }, []);

  return (
    <span ref={blockRef}>
      {text?.split("").map((txt, index) => (
        <span
          key={`${index}-txtEffect`}
          {...props}
          ref={elementRef}
          className="text-effect"
        >
          {txt}
        </span>
      )) || children}
    </span>
  );
};

export default TextEffect;
