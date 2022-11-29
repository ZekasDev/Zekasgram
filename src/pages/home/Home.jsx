import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./Home.scss";
import { FriendsStories } from "../../components/FriendsStories/FriendsStories";
import { Post } from "../../components/Post/Post";
export function Home() {
  return (
    <div>
      <Header/>
      <FriendsStories/>
      <Post/> 
      <Footer/>
    </div>
  );
}