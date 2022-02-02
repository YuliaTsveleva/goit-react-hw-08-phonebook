import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import ContactsView from './views/ContactsView';
import { HomeView } from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './Components/Container/Container';
import { authOperations, authSelectors } from './Redux/auth';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {!isFetching && (
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" redirectTo="/contacts" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      )}
    </Container>
  );
}

// import './App.css';
// import Section from './Components/Section';
// import AddContactForm from './Components/AddContactForm';
// import ContactList from './Components/ContactList';
// import Filter from './Components/Filter';
// import EmptyText from './Components/EmptyText';
// import { useSelector } from 'react-redux';
// // import { getContacts } from './Redux/phonebook/contacts-selectors';
// // import { getLoadingContactList } from './Redux/phonebook/contacts-selectors';
// import { selectors } from './Redux/phonebook';

// export default function App() {
//   const contactsLength = useSelector(selectors.getContacts).length;
//   const loading = useSelector(selectors.getLoading);

//   return (
//     <div className="App">
//       <Section title="Phonebook">
//         <AddContactForm />
//       </Section>
//       <Section title="Contacts">
//         {contactsLength > 1 && <Filter />}
//         <ContactList />
//         {contactsLength === 0 && loading === 'notLoading' && <EmptyText />}
//       </Section>
//     </div>
//   );
// }
