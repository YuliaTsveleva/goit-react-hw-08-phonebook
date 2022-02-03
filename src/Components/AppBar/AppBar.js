import { useSelector } from 'react-redux';
import MainNav from '../MainNav/MainNav';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from 'Redux/auth';
import s from './AppBAr.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetching = useSelector(authSelectors.getIsFetchingCurrentUser);
  return (
    <header className={s.Header}>
      <MainNav />
      {isLoggedIn || isFetching ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
