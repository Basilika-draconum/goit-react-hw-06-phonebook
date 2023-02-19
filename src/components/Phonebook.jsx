import FormPhonebook from './FormPhonebook/FormPhonebook';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './phonebook.module.scss';

const Phonebook = () => {
  return (
    <div className={css.main}>
      <h2>Phonebook</h2>
      <FormPhonebook />
      <h3 className={css.contacts}> Contacts</h3>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Phonebook;
