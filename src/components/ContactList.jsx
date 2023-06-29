import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  setContactToDelete = e => {
    const contactId = e.target.id;
    this.props.deleteContact(contactId);
  };

  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button id={contact.id} onClick={this.setContactToDelete}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
