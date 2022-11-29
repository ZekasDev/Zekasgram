import "./Post.scss";
import nine from "../../assets/Images/9.png";
import picanha from "../../assets/Images/picanha.jpg";
import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  PaperPlaneTilt,
} from "phosphor-react";
export function Post() {
  return (
    <div className="post-content">
      <header className="post-header">
        <div className="user-info">
          <img src={nine} alt="FOTO DO MELIANTE" />
          <span className="user-name">GodNine</span>
        </div>
        <DotsThree size={30} />
      </header>

      <section className="post-img">
        <img src={picanha} alt="POSTAGEM DO NINE" />
      </section>

      <footer className="post-footer">
        <div className="icons">
          <div className="icons-reaction">
            <Heart size={25} />
            <ChatCircle size={25} />
            <PaperPlaneTilt size={25} />
          </div>
          <BookmarkSimple size={25} />
        </div>
        <span className="likes">420 curtidas</span>
        <div className="post-title">
          <p className="post-description">
            <b>GodNine</b> Ninguém segura o bonde da Picanha! O amor venceu o
            ódio. E só quem vira Jacaré é a sua sogra.
          </p>
        </div>
        <div className="more-comments">Ver todos os 3 comentários</div>
        <div className="time-stamp">HÁ 420 MINUTOS</div>
      </footer>
    </div>
  );
}
