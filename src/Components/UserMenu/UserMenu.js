// import defaultAvatar from './default-avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'Redux/auth';

// перенести стили в модуль

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  //   const avatar = defaultAvatar;
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const isFetching = useSelector(authSelectors.getIsFetchingCurrentUser);

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Hello, {isFetching ? 'Guest' : name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
