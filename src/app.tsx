import React from 'react';
import { Header } from './atoms/header';
import { Box } from './atoms/box';
import { GlobalStyles } from './style/globalStyles';
import { ContentContainer } from './atoms/contentContainer';
import { AppContainer } from './atoms/appContainer';
import { LoginForm } from './organisms/loginForm';
import { LoginService } from './services/LoginService';

export const App: React.FC = () => (
  <AppContainer>
    <GlobalStyles />
    <Header>Registration</Header>
    <ContentContainer>
      <Box>
        <LoginForm
          onSubmit={(username, password) =>
            LoginService.login(username, password)
          }
        />
      </Box>
    </ContentContainer>
  </AppContainer>
);
