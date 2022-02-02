import { useSelector } from 'react-redux';
import MainNav from '../MainNav/MainNav';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from 'Redux/auth';

// перенести стили в модуль.css!

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetching = useSelector(authSelectors.getIsFetchingCurrentUser);
  return (
    <header style={styles.header}>
      <MainNav />

      {isLoggedIn || isFetching ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
