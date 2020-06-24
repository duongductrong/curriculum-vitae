import React, { FC } from "react";
import Progress from "../../../../components/Progress/Progress";

interface BlockProgress
  extends Omit<React.HTMLAttributes<HTMLElement>, "name" | "progress"> {
  name: string;
  progress: number;
}

const BlockProgress: FC<BlockProgress> = ({ name, progress }) => (
  <div className="skills__show">
    <label className="skills__show__lb" htmlFor={name}>
      {name}
    </label>
    <Progress id={name} progress={progress} />
  </div>
);

export default BlockProgress;
