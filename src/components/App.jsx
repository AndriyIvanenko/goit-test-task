import { ThemeProvider } from 'styled-components';
import { theme } from 'services/theme';

import { Div } from './App.styled';
import users from 'db/users.json';
import { UsersList } from './UsersList/UsersList';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <UsersList users={users} />
      </Div>
    </ThemeProvider>
  );
};
