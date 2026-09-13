import Naruto from "../assets/naruto.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main-content">
        <h1>
          Naruto is an outcast orphan ninja with a sealed demon fox who fights
          enemies to become Hokage and win respect.
        </h1>
      </div>
      <div className="main-image">
        <img src={Naruto} alt="Uzumaki Naruto" />
      </div>
    </div>
  );
};
export default Main;
