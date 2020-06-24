import React, { FC } from "react";
import "./view-project.scss";

export interface ViewProjectProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className" | "source"> {
  className?: string | undefined;
  source?: string | undefined;
  image?: string | undefined;
  alt?: string | undefined;
  name?: string | undefined;
}

const ViewProject: FC<ViewProjectProps> = ({
  className,
  source,
  image,
  alt,
  name,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`view-project${className ? ` ${className}` : ""}`}
    >
      <div className="view-project__box">
        <img className="view-project__source" src={image} alt={alt} />
        <h1 className="view-project__name"> {name} </h1>
      </div>
      <a className="view-project__view" href={source} target="__blank">
        View
      </a>
    </div>
  );
};

ViewProject.defaultProps = {
  name: "Project",
  className: "",
  image: "",
  alt: "",
  source: "",
};

export default ViewProject;
