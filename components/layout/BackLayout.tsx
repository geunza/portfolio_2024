import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
type BackgroundStar = {
  id: number;
  color: string;
  xPos: string;
  yPos: string;
};
type MousePos = {
  xPos: number;
  yPos: number;
};
const generateStar = (length: number) => {
  let starArr = [];
  for (let i = 0; i < length; i++) {
    let color = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    let xPos = Math.round(Math.random() * 100) + "%";
    let yPos = Math.round(Math.random() * 100) + "%";
    const newObj = {
      id: i,
      color,
      xPos,
      yPos,
    };
    starArr.push(newObj);
  }
  return starArr;
};

const BackLayout: React.FC<{}> = ({}) => {
  const [stars, setStars] = useState<BackgroundStar[]>(generateStar(150));
  const [pos, setPos] = useState<MousePos>({
    xPos: 0,
    yPos: 0,
  });
  const getMousePos = useCallback((e: MouseEvent) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const xPosPercent = ((e.clientX - centerX) / centerX) * 100;
    const yPosPercent = ((e.clientY - centerY) / centerY) * 100;
    setPos({
      xPos: parseFloat(xPosPercent.toFixed(2)),
      yPos: parseFloat(yPosPercent.toFixed(2)),
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", getMousePos);
    return () => {
      window.removeEventListener("mousemove", getMousePos);
    };
  }, [getMousePos]);
  useEffect(() => {
    console.log(pos);
  }, [pos]);
  return (
    <Background
      style={{
        transform: `translateX(${(-0.01 * pos.xPos).toFixed(2)}%) translateY(${(
          -0.01 * pos.yPos
        ).toFixed(2)}%)`,
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            boxShadow: `0 0 5px 1px ${star.color}`,
            background: star.color,
            left: star.xPos,
            top: star.yPos,
          }}
        ></div>
      ))}
    </Background>
  );
};

export default BackLayout;
const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  .star {
    position: absolute;
    left: 0;
    top: 0;
    transition: left 0.3s top 0.3s;
    width: 3px;
    height: 3px;
    border-radius: 3px;
    opacity: 0.3;
  }
`;
