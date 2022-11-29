import { House, MagnifyingGlass, MessengerLogo, Play } from "phosphor-react";
import "./Footer.scss";
import nine from "../../assets/Images/9.png"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <House size={30} weight="fill" />
        <MagnifyingGlass size={30}/>
        <Play size={30}/>
        <MessengerLogo size={30}/>
        <div className="user-photo">
          <img src={nine} alt="FOTO DO NINE" />
        </div>

      </div>
    </footer>
  );
}