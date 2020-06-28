import React, { useEffect, useState } from "react";
import "./pointer-mouse.scss";

export interface PointerMouseProps {
  width: number;
  height: number;
}

function PointerMouse({ width = 0, height = 0, ...props }: PointerMouseProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouse({
        ...mouse,
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  const styleMouse = { width, height, top: mouse.y, left: mouse.x };

  return <span {...props} style={styleMouse} className="pointer-mouse"></span>;
}

export default PointerMouse;
