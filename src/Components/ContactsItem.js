import styled from 'styled-components';

const StyledContactsItem = styled.li`
  display: flex;
`;

export const ContactsItem = ({ children }) => {
  return <StyledContactsItem>{children}</StyledContactsItem>;
};
