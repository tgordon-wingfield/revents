import { useSelector } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'semantic-ui-react';
import AccountPage from '../../features/auth/AccountPage';
import EventDashboard from '../../features/events/eventDashboard/EventDashboards';
import EventForm from '../../features/events/eventForm/EventForm';
import EventDetailedPage from '../../features/events/eventsDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import ProfilePage from '../../features/profiles/profilePage/ProfilePage';
import Sandbox from '../../features/sandbox/Sandbox';
import ErrorComponent from '../common/errors/ErrorComponents';
import ModalManager from '../common/modals/ModalManager';
import LoadingComponent from './LoadingComponent';
import PrivateRoute from './PrivateRoute';

function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);

  if(!initialized) return <LoadingComponent content = 'Loading app...'/>
  return (
    <>
      <ModalManager/>
      <ToastContainer position = 'bottom-right' hideProgressBar/>
      <Route exact path = '/' component = { HomePage }/>
      <Route path = { '/(.+)' } render = { () => (
        <>
          <NavBar/>
          <Container className = 'main'>
            <Route exact path = '/events' component = { EventDashboard }/>
            <Route exact path = '/sandbox' component = { Sandbox }/>
            <Route path = '/events/:id' component = { EventDetailedPage }/>
            <PrivateRoute path = { ['/createEvent', '/manage/:id'] } component = { EventForm } key = { key }/>
            <Route path = '/error' component = { ErrorComponent }/>
            <PrivateRoute path = '/account' component = { AccountPage }/>
            <PrivateRoute path = '/profile/:id' component = { ProfilePage }/>
          </Container>
        </>
      ) }/>
    </>
  );
}

export default App;
