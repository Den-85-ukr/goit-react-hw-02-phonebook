import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

class ListItem extends Component {
  render() {
    const { id, name, number, onDeleteItem } = this.props;
    return (
      <li>
      <span className={styles.contact}>
      {name}:{number}
      </span>
      <button
      onClick={() => onDeleteItem(id)}
      type="button"
      >
      Delete
      </button>
      </li>)
    }
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListItem;