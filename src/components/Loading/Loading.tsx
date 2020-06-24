import React, { FC, useEffect } from "react";
import "./loading.scss";
import Progress from "../Progress/Progress";
import createAnimation from "../../core/plugins/animation.plugin";

export interface LoadingProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const Loading: FC<LoadingProps> = ({ ...props }) => {
  useEffect(() => {
    const animations = [
      {
        element: "#logo",
        animation: "fromTop",
        duration: {
          init: 200,
        },
        timeUnit: "ms",
      },
      {
        element: "#subtext",
        animation: "fromBottom",
        duration: {
          init: 500,
        },
        timeUnit: "ms",
      },
      { element: "#loading", animation: "fromBottom", duration: { init: 400 } }
    ];

    animations.forEach(animate => {
        createAnimation({
            element: animate.element,
            animation: animate.animation,
            duration: animate.duration,
            timeUnit: "ms",
          });
    })
  }, []);

  return (
    <div className="loading">
      <div className="loading__box">
        <h1 id="logo" className="loading__logo">
          <span>DDT</span>
        </h1>
        <small id="subtext">Try it now, oop!! waiting for me</small>
        <Progress id="loading" className="loading__progress-bar" progress={100} />
      </div>
    </div>
  );
};

Loading.defaultProps = {};

export default Loading;
