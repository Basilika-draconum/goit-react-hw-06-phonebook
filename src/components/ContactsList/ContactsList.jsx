import { deleteContactAction } from ' redux/contacts/contact-slice';
import { selectFilteredContacts } from ' redux/filter/filterSelector';
import { useDispatch, useSelector } from 'react-redux';
import css from './contactsList.module.scss';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(deleteContactAction(id));
  const contact = contacts.map(item => {
    return (
      <li key={item.id} className={css.contact}>
        {item.name}: {item.number}
        <button
          type="button"
          className={css.contactBtn}
          onClick={() => {
            deleteContact(item.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  return <ul>{contact}</ul>;
};

export default ContactsList;
