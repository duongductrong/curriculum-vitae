import React, { FC, ReactNode, useEffect, useRef } from "react";
import "./button.scss";

export interface ButtonProps
  extends Omit<
    React.HTMLAttributes<HTMLElement & HTMLAnchorElement>,
    "className" | "component"
  > {
  className?: string | undefined;
  children?: ReactNode | undefined;
  component?: string | undefined;
  href?: string | undefined;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  component,
  ...props
}) => {
  const elementRef: any = useRef(null);

  useEffect(() => {
    if (className) {
      className.split(" ").forEach((element: String) => {
        elementRef.current.classList.add(element);
      });
    }
  }, []);

  return React.createElement(
    `${component}`,
    { ref: elementRef, className: "button", ...props },
    <span> {children} </span>
  );
};

Button.defaultProps = {
  className: "",
  component: "button",
  href: "#",
};

export default Button;
