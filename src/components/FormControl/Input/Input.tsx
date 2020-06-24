import React, { FC } from "react";
import "./input.scss";

export interface InputProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "className"> {
  className?: string | undefined;
  name?: string | undefined;
  value?: string | undefined;
  required?: boolean | undefined;
}

const Input: FC<InputProps> = ({ className, name, value, required,...props }) => {
  return (
    <input
      {...props}
      name={name}
      value={value}
      required={required}
      className={`form-control${className ? ` ${className}` : ""}`}
    />
  );
};

export default Input;
