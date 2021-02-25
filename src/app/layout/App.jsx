import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboards';
import NavBar from '../../features/nav/NavBar';

function App() {

  const [formOpen, setFormOpen] = useState(false);

  const[selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <h1>Re-vents</h1>
      <NavBar setFormOpen = { setFormOpen }/>
      <Container className = 'main'>
        <EventDashboard formOpen = { formOpen } setFormOpen = { setFormOpen } selectEvent = { handleSelectEvent } selectedEvent = { selectedEvent }/>
      </Container>
    </>
  );
}

export default App;
