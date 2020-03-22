import React from "react";
import { Input } from "./atoms/input";
import { Label } from "./atoms/label";
import { Header } from "./atoms/header";
import { Box } from "./atoms/box";
import { GlobalStyles } from "./style/globalStyles";
import { ContentContainer } from "./atoms/contentContainer";
import { AppContainer } from "./atoms/appContainer";
import { Button } from "./atoms/button";

type PasswordRule = { regex: RegExp; description: string };

const PasswordConfig: PasswordRule[] = [
  { regex: /.{8,}/, description: "8+ characters" },
  { regex: /.*[a-z].*/, description: "lowercase letter" },
  { regex: /.*[A-Z].*/, description: "uppercase letter" },
  { regex: /.*\d.*/, description: "number" },
  // this regex matches a character that is neither a letter, nor a digit
  // \w instead of A-Za-z wouldn't have worked because \w includes underscores
  { regex: /.*[^A-Za-z\d].*/, description: "special character" }
];

export const App: React.FC = () => (
  <AppContainer>
    <GlobalStyles />
    <Header>Registration</Header>
    <ContentContainer>
      <Box>
        <Label>Email</Label>
        <Input />
        <Label>Password</Label>
        <Input type="password" />
        <Button>Submit</Button>
      </Box>
    </ContentContainer>
  </AppContainer>
);
