import styled from 'styled-components';
import { ContactsItem } from './ContactsItem';

const StyledContactsList = styled.ul`
  padding: 0;
  width: 100%;
  max-width: 30%;
`;

export const ContactsList = ({ contacts }) => {
  console.log(contacts);
  return (
    <StyledContactsList>
      {contacts?.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <p className="contact_name">{name}</p>
            <p>{number}</p>
          </ContactsItem>
        );
      })}
    </StyledContactsList>
  );
};
