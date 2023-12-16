import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Person } from './types';
import ContactForm from './contact-form';
import ContactCard from './contact-card';

const ContactBook = () => {
  const [persons, setPersons] = useState<Person[]>([{id:"1", name:"Frank", city:"Los Angeles"}]);
  const [personBeingEdited, setPersonBeingEdited] = useState<string | null>(null);

  const handleAddContact = (newPerson:Person) => {
    setPersons([...persons, { id: uuidv4(), ...newPerson }]);
  }

  return(
    <div>
      <ContactForm title="Add a new contact" onSave={handleAddContact} />
      <div>
        {persons.map((person) => {
          if (personBeingEdited && person.id === personBeingEdited) {
            return (
              <>
                <div>This will be the from to edit {person.name}</div>
                <button onClick={() => setPersonBeingEdited(null)}>Save</button>
              </>
            );
          }
          return (
            <ContactCard
              key={person.id}
              person={person}
              onEditContact={() => setPersonBeingEdited(person.id)}
            />
          );
        })}
      </div>
    </div>
  )
};

export default ContactBook;
