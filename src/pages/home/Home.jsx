import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./Home.scss";
export function Home() {
  return (
    <div>
      <Header/>
      <div className="home">
        <h1>Conteudo da home</h1>
      </div>
      <Footer/>
    </div>
  );
}