import React, { FC, ReactNode, useEffect, useRef } from "react";
import "./spinner-progress.scss";

export interface SpinnerProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  className?: string | undefined;
  progress?: number | undefined;
  children?: ReactNode | undefined;
}

const SpinnerProgress: FC<SpinnerProgressProps> = ({
  progress,
  className,
  children,
  ...props
}) => {
  const elementRef : any = useRef(null);

  useEffect(() => {
    if (className) {
      className?.split(" ").forEach((element: String) => {
        elementRef.current.classList.add(element)
      });
    }
  }, []);

  return (
    <div ref={elementRef} {...props} className="spinner-progress">
      {children} {`${progress ? `${progress}%` : ""}`}
    </div>
  );
};

SpinnerProgress.defaultProps = {
  progress: 0,
  className: "",
};

export default SpinnerProgress;
