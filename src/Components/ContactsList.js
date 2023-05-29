import { ContactsItem } from './ContactsItem';

export const ContactsList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      Contact
      {contacts?.map(({ id, name, number }) => {
        console.log(id, name, number);
        return (
          <ContactsItem key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <span></span>
          </ContactsItem>
        );
      })}
    </ul>
  );
};
