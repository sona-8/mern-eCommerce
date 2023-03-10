import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Error, ForgetPasswordWrapper, Form } from "./Styles";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SaveIcon from "@mui/icons-material/Save";
import { clearMsg, findAccount } from "../../feature/reducer/user/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

const ForgetPassword = () => {
  const [value, setValue] = useState("");

  const { msg, isLoading, findLoadAccount } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) {
      dispatch(
        findAccount({
          pathOne: "auth",
          pathTwo: "forget",
          method: "get",
          _id: value,
          navigate,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(clearMsg());
  }, [dispatch]);

  const canelHandler = () => {
    navigate("/login");
  };

  return (
    <Layout>
      <ForgetPasswordWrapper>
        <Typography variant="h5" fontWeight={600}>
          Find Your Account
        </Typography>
        <Box mt={1}>
          <Typography variant="body1">
            Please enter your email address to search for your account.
          </Typography>

          <Box sx={{ marginTop: 2 }}>
            <Form onSubmit={submitHandler}>
              <FormControl variant="standard" fullWidth>
                <TextField
                  fullWidth
                  type={"email"}
                  label="Email Adress"
                  id="fullWidth"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </FormControl>
              {msg && (
                <Error style={{ marginTop: "4px" }}>
                  <ErrorOutlineIcon /> {msg}
                </Error>
              )}

              <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                {findLoadAccount ? (
                  <LoadingButton
                    loading={true}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    Search
                  </LoadingButton>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ marginRight: 1 }}
                    type="submit"
                    disabled={findLoadAccount}
                  >
                    Search
                  </Button>
                )}

                <Button variant="outlined" onClick={canelHandler}>
                  Cancel
                </Button>
              </Box>
            </Form>
          </Box>
        </Box>
      </ForgetPasswordWrapper>
    </Layout>
  );
};

export default ForgetPassword;
