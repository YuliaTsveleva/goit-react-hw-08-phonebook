import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'Redux/auth';
import LetterAvatar from './Avatar';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const isFetching = useSelector(authSelectors.getIsFetchingCurrentUser);

  return (
    <div className={s.container}>
      <LetterAvatar name={isFetching ? 'Guest' : name} />
      <span className={s.name}>Hello, {isFetching ? 'Guest' : name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
