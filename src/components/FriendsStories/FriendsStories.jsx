import "./FriendsStories.scss";
import nine from "../../assets/Images/9.png";
import draculinha from "../../assets/Images/draculinha.png"
import zekas from "../../assets/Images/zekas.png"
import pablo from "../../assets/Images/pablo.png"
import doug from "../../assets/Images/doug.png"
import bt from "../../assets/Images/bt.png"
import celzin from "../../assets/Images/celzin.png"
import dalai from "../../assets/Images/dalai.png"
export function FriendsStories() {
  return (
    <div className="stories-container">
      <div className="stories">
        <div className="user-self">
          <img className="pics" src={nine} />
          <h4>Seu story</h4>
        </div>
        <div className="user">
          <img className="pics" src={zekas} />
          <h4>ZekasDev</h4>
        </div>
        <div className="user">
          <img className="pics" src={draculinha} />
          <h4>Draculinha</h4>
        </div>
        <div className="user">
          <img className="pics" src={pablo} />
          <h4>BluePanic!</h4>
        </div>
        <div className="user">
          <img className="pics" src={doug} />
          <h4>DougDev</h4>
        </div>
        <div className="user">
          <img className="pics" src={bt} />
          <h4>Betinha</h4>
        </div>  <div className="user">
          <img className="pics" src={celzin} />
          <h4>GordinGore</h4>
        </div>  <div className="user">
          <img className="pics" src={dalai} />
          <h4>Dalai ...</h4>
        </div>
      </div>
    </div>
  );
}
