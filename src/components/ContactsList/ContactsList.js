import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, name }) => {    
    return (      
      <div>
        <h1>Contacts</h1>
        <ul>{contacts.map(contact => {return <li key={uuidv4()}>{name}</li>;})}
        </ul>
      </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContactsList;
