import nameRick from '../../assets/icons/nameRick.svg';
import ilustrationRick from '../../assets/icons/ilustrationRick.svg';
import '../Main/styles.css';

export const Main = () => {
  return (
    <main>
      <div className="container-ilustration">
        <img src={ilustrationRick} alt="Ilustração de Rick" />
      </div>
      <div className="content-main">
        <img src={nameRick} alt="Nome de Rick" />
        <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
        <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>
        <div className="container-btn-main">
          <a className="btn-primary">Veja agora</a>
          <a className="btn-secondary">Saiba mais</a>
        </div>
      </div>
    </main>
  )

}   