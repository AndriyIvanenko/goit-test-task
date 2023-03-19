// import users from 'db/users.json';
import { UserCard } from 'components/UserCard/UserCard';
import { List } from './UsersList.styled';

export const UsersList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </List>
  );
};
