import React, { useState } from "react";
import { Input } from "./atoms/input";
import { Label } from "./atoms/label";
import { Header } from "./atoms/header";
import { Box } from "./atoms/box";
import { GlobalStyles } from "./style/globalStyles";
import { ContentContainer } from "./atoms/contentContainer";
import { AppContainer } from "./atoms/appContainer";
import { Button } from "./atoms/button";
import { CriteriaList } from "./molecules/criteriaList";
import { Rule, checkRules } from "./utility/criteriaUtil";

const passwordConfig: Rule[] = [
  { regex: /.{8,}/, description: "8+ characters" },
  { regex: /.*[a-z].*/, description: "lowercase letter" },
  { regex: /.*[A-Z].*/, description: "uppercase letter" },
  { regex: /.*\d.*/, description: "number" },
  // this regex matches a character that is neither a letter, nor a digit
  // \w instead of A-Za-z wouldn't have worked because \w includes underscores
  { regex: /.*[^A-Za-z\d].*/, description: "special character" }
];

export const App: React.FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const checkedRules = checkRules(passwordConfig, pwValue);
  const isEveryCriteriaFulfilled = checkedRules.every(
    criteriaFulfilled => criteriaFulfilled
  );

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

          <Button disabled={!isEveryCriteriaFulfilled}>Submit</Button>
          <CriteriaList
            descriptions={passwordConfig.map(rule => rule.description)}
            fulfilledStates={checkedRules}
          />
        </Box>
      </ContentContainer>
    </AppContainer>
  );
};
