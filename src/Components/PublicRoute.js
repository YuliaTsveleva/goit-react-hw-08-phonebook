import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'Redux/auth';
import PropTypes from 'prop-types';

export default function PublicRoute({
  children,
  redirectTo = '/',
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

PublicRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};
