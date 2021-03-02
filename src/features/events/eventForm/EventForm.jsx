import cuid from 'cuid';
import { useState } from 'react';
import { Segment, Header, Button, FormField } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { Formik, Form, Field } from 'formik';

export default function EventForm({ match, history }) {

    const dispatch = useDispatch();

    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {
        selectedEvent ? dispatch(updateEvent({
            ...selectedEvent,
            ...values
        })) : dispatch(createEvent({
            ...values,
            id: cuid(),
            hostedBy: 'Bob',
            attendees:[], 
            hostPhotoURL: 'assets/user.png'
        }));
        history.push('/events')
    }

    function handleInputChange(e) {

        const { name, value } = e.target;
        setValues({...values, [name]: value });
    }
    
    return(
        <Segment clearing>
            <Header content = { selectedEvent ? 'Edit the event' : 'Create new event' }/>
            <Formik initialValues = { initialValues } onSubmit = { values => console.log(values) }>
                { ({ values, handleChange, handleSubmit }) => (
                    <Form className = 'ui form' onSubmit = {handleSubmit }>
                        <FormField>
                            <Field name = 'title' placeholder = 'Event title'/>
                        </FormField>
                        <FormField>
                            <input type = 'text' placeholder = 'Category' name = 'category' value = { values.category } onChange = { handleChange }/>
                        </FormField>
                        <FormField>
                            <input type = 'text' placeholder = 'Description' name = 'description' value = { values.description } onChange = { handleChange }/>
                        </FormField>
                        <FormField>
                            <input type = 'text' placeholder = 'City' name = 'city' value = { values.city } onChange = { handleChange }/>
                        </FormField>
                        <FormField>
                            <input type = 'text' placeholder = 'Venue' name = 'venue' value = { values.venue } onChange = { handleChange }/>
                        </FormField>
                        <FormField>
                            <input type = 'date' placeholder = 'Date' name = 'date' value = { values.date } onChange = { handleChange }/>
                        </FormField>
                        <Button type = 'submit' floated = 'right' positive content = 'Submit'/>
                        <Button as = { Link } to = '/events' type = 'submit' floated = 'right' content = 'Cancel'/>
                    </Form>
                )}
            </Formik>
        </Segment>
    )
}