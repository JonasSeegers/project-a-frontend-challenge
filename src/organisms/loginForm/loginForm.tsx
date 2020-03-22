import React, { useState } from "react";
import { Form } from "../../molecules/form";
import { Label } from "../../atoms/label";
import { Input } from "../../atoms/input";
import { CriteriaList } from "../../molecules/criteriaList";
import { Button } from "../../atoms/button";
import { checkRules } from "../../utility/criteriaUtil";
import { checkEmail } from "../../utility/emailUtils";
import { passwordRules } from "../../config/passwordRules";
import { InputsRow, LabeledInputsContainer } from "./inputs.style";
import {
  FormFooterRow,
  FormFooterElementContainer,
  FormFooterButtonContainer
} from "./formFooter.style";

interface LoginFormProps {
  onSubmit?(username: string, password: string): void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const checkedRules = checkRules(passwordRules, pwValue);
  const isEveryCriteriaFulfilled = checkedRules.every(
    criteriaFulfilled => criteriaFulfilled
  );
  const isEmailValid = checkEmail(emailValue);

  return (
    <Form>
      <InputsRow>
        <LabeledInputsContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            value={emailValue}
            id="email"
            type="email"
            name="email"
            onChange={event => setEmailValue(event.target.value)}
          />
        </LabeledInputsContainer>

        <LabeledInputsContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={pwValue}
            onChange={event => setPwValue(event.target.value)}
          />
        </LabeledInputsContainer>
      </InputsRow>

      <FormFooterRow>
        <FormFooterElementContainer>
          <CriteriaList
            descriptions={passwordRules.map(rule => rule.description)}
            fulfilledStates={checkedRules}
          />
        </FormFooterElementContainer>

        <FormFooterButtonContainer>
          <Button
            disabled={!isEveryCriteriaFulfilled || !isEmailValid}
            type="button"
            onClick={() => onSubmit && onSubmit(emailValue, pwValue)}
          >
            Submit
          </Button>
        </FormFooterButtonContainer>
      </FormFooterRow>
    </Form>
  );
};
