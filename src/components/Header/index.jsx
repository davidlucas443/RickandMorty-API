import logoGithub from '../../assets/icons/logoGitHub.svg';
import '../Header/style.css';

export const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <a href="https://github.com/davidlucas443">
          <span>davidlucas443</span>
          <img src={logoGithub} alt="Logo GitHub" />
        </a>
      </div>
    </header>
  );
};