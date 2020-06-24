import React, { FC, useEffect, useRef } from "react";
import "./progress.scss";

export interface ProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "progress"> {
  className?: string | undefined;
  progress?: number | undefined;
}

const Progress: FC<ProgressProps> = ({ className, progress, ...props }) => {
  const refProgress: any = useRef(null);

  useEffect(() => {
    refProgress.current.style.width = `${progress}%`;
  }, []);

  return (
    <div {...props} className={`progress${className ? ` ${className}` : ""}`}>
      <div ref={refProgress} className="progress__running"></div>
    </div>
  );
};

Progress.defaultProps = {
  className: "",
  progress: 0,
};

export default Progress;
