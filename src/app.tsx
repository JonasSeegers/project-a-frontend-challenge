import React, { useState } from "react";
import { Input } from "./atoms/input";
import { Label } from "./atoms/label";
import { Header } from "./atoms/header";
import { Box } from "./atoms/box";
import { GlobalStyles } from "./style/globalStyles";
import { ContentContainer } from "./atoms/contentContainer";
import { AppContainer } from "./atoms/appContainer";
import { Button } from "./atoms/button";
import { Criteria } from "./atoms/criteria";

type PasswordRule = { regex: RegExp; description: string };

const passwordConfig: PasswordRule[] = [
  { regex: /.{8,}/, description: "8+ characters" },
  { regex: /.*[a-z].*/, description: "lowercase letter" },
  { regex: /.*[A-Z].*/, description: "uppercase letter" },
  { regex: /.*\d.*/, description: "number" },
  // this regex matches a character that is neither a letter, nor a digit
  // \w instead of A-Za-z wouldn't have worked because \w includes underscores
  { regex: /.*[^A-Za-z\d].*/, description: "special character" }
];

const renderCriteria = (testValue: string) => {
  return passwordConfig.map(({ regex, description }, index) => (
    <Criteria fulfilled={regex.test(testValue)} key={`criteria_${index}`}>
      {description}
    </Criteria>
  ));
};

export const App: React.FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  return (
    <AppContainer>
      <GlobalStyles />
      <Header>Registration</Header>
      <ContentContainer>
        <Box>
          <Label>Email</Label>
          <Input
            value={emailValue}
            onChange={event => setEmailValue(event.target.value)}
          />
          <Label>Password</Label>
          <Input
            type="password"
            value={pwValue}
            onChange={event => setPwValue(event.target.value)}
          />
          <Button>Submit</Button>
          {renderCriteria(pwValue)}
        </Box>
      </ContentContainer>
    </AppContainer>
  );
};
