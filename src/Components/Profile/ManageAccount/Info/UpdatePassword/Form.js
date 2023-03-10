import React from "react";

import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";

import Input from "../../../../Shared/Form/Input";
import { useCheckbox } from "../../../../../hooks/useCheckbox";
import { useSelector } from "react-redux";
import { Error } from "../../../../Shared/Styles/styles";
import { LoadingButton } from "@mui/lab";

const Form = ({
  formState,
  handleChange,
  handleFocus,
  handleBlur,
  isValidForm,
  submitHandler,
  closeModal,
}) => {
  const { password, new_password } = formState;

  const { msg, user, isLoading } = useSelector((state) => state.auth);

  const { handleChange: checkHandleChange, isChecked } = useCheckbox();

  return (
    <Box
      component="form"
      sx={{
        marginTop: 1,
        "& .MuiTextField-root": { m: 1, width: "100%", background: "white" },
      }}
      noValidate
      onSubmit={submitHandler}
    >
      <Input
        label="Old Password"
        name="password"
        type={!isChecked ? "password" : "text"}
        error={password.error}
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        value={password.value}
      />

      <Input
        label="New Password"
        type={!isChecked ? "password" : "text"}
        name="new_password"
        error={new_password.error}
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        value={new_password.value}
      />
      {msg && <Error>{msg}</Error>}

      <Box>
        <FormControlLabel
          control={<Checkbox onChange={checkHandleChange} value={isChecked} />}
          label="Show password"
        />
      </Box>

      {isLoading ? (
        <LoadingButton size="small" loading={true} variant="outlined" disabled>
          <span>disabled</span>
        </LoadingButton>
      ) : (
        <Button
          variant="contained"
          type="submit"
          disabled={!password.value || !new_password.value || !isValidForm}
        >
          Change
        </Button>
      )}

      <Button
        sx={{ marginLeft: "1rem" }}
        variant="outlined"
        onClick={closeModal}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default Form;
