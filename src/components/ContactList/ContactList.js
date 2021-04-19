import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

class ContactList extends Component {
  render() {
    return (
      <ul className={styles.phoneBookList}>
        {this.props.visibleContacts.map(({ id, name, number }) => (
          <li key={id} id={id}>
            <span className={styles.contact}>
              {name}:{number}
            </span>
            <button
              onClick={() => this.props.onDeleteContact(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
}

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;