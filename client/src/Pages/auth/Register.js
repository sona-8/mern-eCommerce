import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../Components/Shared/Form/Input";
import { Checkmark, Error, FormWrape, Label, ShowPassword } from "./Styles";

import Form from "../../Components/Shared/Form/Form";
import Or from "./Or";
import { useValidator } from "../../utils/userValidator";

import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { register } from "../../feature/reducer/user";
import { BiX } from "react-icons/bi";
import { Button } from "@mui/material";

const initial = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const { errors } = useSelector((state) => state.user);
  const [checkValid, setCheckValid] = useState(false);
  const [type, setType] = useState("password");

  const {
    formState,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    isValidForm,
  } = useForm({
    init: initial,
    validate: useValidator,
  });

  const dispatch = useDispatch();
  const cb = ({ values, hasError }) => {
    dispatch(register(values));
  };

  // password visibility
  const visibleHandler = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    if (value) {
      setType("text");
    } else {
      setType("password");
    }
  };

  const { username, email, password } = formState;

  useEffect(() => {
    if (
      password.value &&
      username.value &&
      email.value &&
      !password.error &&
      !email.error &&
      !username.error
    ) {
      setCheckValid(true);
    } else {
      setCheckValid(false);
    }
  }, [username, email, password]);

  return (
    <FormWrape>
      {errors && (
        <resourcesError>
          {errors.email && (
            <Error>
              <BiX /> {`${errors.email.msg}`}
            </Error>
          )}

          {errors.username && (
            <Error>
              <BiX />
              {` ${errors.username.msg}`}
            </Error>
          )}
        </resourcesError>
      )}

      <Form onSubmit={(e) => handleSubmit(e, cb)}>
        <Input
          name="username"
          type="username"
          placeHolder="Username"
          value={username.value}
          error={username.error}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />

        <Input
          name="email"
          type="email"
          placeHolder="Email"
          value={email.value}
          error={email.error}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />

        <Input
          name="password"
          type={type}
          placeHolder="Password"
          value={password.value}
          error={password.error}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />

        <ShowPassword>
          <Checkmark type="checkbox" onChange={visibleHandler} />
          <Label>Show Password</Label>
        </ShowPassword>

        <Button type="submit" variant="contained" disabled={!checkValid}>
          Register
        </Button>
      </Form>
      <Or />
    </FormWrape>
  );
};

export default Register;
