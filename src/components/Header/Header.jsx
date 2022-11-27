import zekasGramLogo from "../../assets/Images/logo.png";
import {Heart, SquaresFour} from "phosphor-react";
import "./Header.scss";
export function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
      <div className="logo">
        <img src={zekasGramLogo} alt="" />
      </div>
      <div className="header-buttons">
        <SquaresFour size={24} color="black" weight="bold"/>
        <Heart size={24} color="black" weight="bold"/>
      </div>
      </div>
    </header>
  );
}