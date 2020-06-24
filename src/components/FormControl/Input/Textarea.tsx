import React, { FC } from "react";
import "./input.scss";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  className?: string | undefined;
}

const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={`form-control${className ? ` ${className}` : ""}`}
    ></textarea>
  );
};

export default Textarea;