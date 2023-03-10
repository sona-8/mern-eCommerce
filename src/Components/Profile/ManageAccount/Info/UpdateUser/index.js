import React from "react";

import { useSelector } from "react-redux";

import UpdateForm from "./UpdateForm";

const UpdateUser = () => {
  const { user } = useSelector((state) => state.user);

  return user && <UpdateForm />;
};

export default UpdateUser;
