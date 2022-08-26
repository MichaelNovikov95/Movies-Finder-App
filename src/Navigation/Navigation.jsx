import s from './Navigation.module.css';
import { Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to="/" className={s.link}>
          Home
        </Link>
        <Link to="/movies" className={s.link}>
          Movies
        </Link>
      </nav>
    </header>
  );
}
