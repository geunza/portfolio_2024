import React from "react";
import styled from "styled-components";

const Header: React.FC<{}> = ({}) => {
  return (
    <HeaderWrap>
      <div className="inner">
        <h1>
          <a href="###">
            <span>GEUNYOUNG</span>
          </a>
        </h1>
        <nav>
          <ul className="gnb">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#skill">SKILLS</a>
            </li>
            <li>
              <a href="#career">CARRER</a>
            </li>
            <li>
              <a href="#work">WORKS</a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrap>
  );
};
const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 100;
  transition-duration: 0.5s;
  &.active {
    background-color: rgba(13, 12, 39, 0.8);
    height: 70px;
  }
  .inner {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    h1 a {
      display: block;
      font-size: 22px;
      color: inherit;
      font-weight: 700;
      position: relative;
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 30px;
        height: 30px;
        left: 0;
        top: 50%;
        transform: translate3d(-50%, -50%, 0) rotateZ(45deg);
        background-color: #0d0c27;
        box-shadow: 2px 2px 4px 1px #1f1e39;
      }
      span {
        position: relative;
      }
    }
    nav {
      .gnb {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 500px;
        li {
          &.current a {
            font-weight: 700;
          }
          a {
            font-size: 18px;
            display: block;
            color: inherit;
          }
        }
      }
    }
  }
`;
export default Header;
