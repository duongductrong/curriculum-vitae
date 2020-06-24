import React, { FC, useRef, useEffect, ReactNode } from "react";
import "./layout-general.scss";

export interface LayoutGeneralProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "left" | "className"> {
  left?: ReactNode | undefined;
  children?: ReactNode | undefined;
  className?: string | undefined;
}

const LayoutGeneral: FC<LayoutGeneralProps> = ({
  left,
  children,
  className,
  ...props
}) => {
  const elRef: any = useRef(null);

  useEffect(() => {
    if (className) {
      className.split(" ").forEach((element: String) => {
        elRef.current.classList.add(element);
      });
    }
  }, []);

  return (
    <div {...props} ref={elRef} className="layout-general">
      <div className="layout-general__left"> {left} </div>
      <div className="layout-general__main"> {children} </div>
    </div>
  );
};

LayoutGeneral.defaultProps = {
  left: <div></div>,
  children: <div></div>,
  className: "",
};

export default LayoutGeneral;
