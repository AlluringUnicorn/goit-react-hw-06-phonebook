import { ListItem } from './ListItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return <ul>{filteredContacts.length > 0 && <ListItem></ListItem>}</ul>;
};

