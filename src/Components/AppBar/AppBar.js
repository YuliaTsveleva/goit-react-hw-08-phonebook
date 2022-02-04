import { useSelector } from 'react-redux';
import MainNav from '../MainNav';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from 'Redux/auth';
import s from './AppBar.module.css';

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
