import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApi, deepClone } from "../../../utils/index";
import { toast } from "react-toastify";
import { tostify } from "../../../utils/toastify";
const initialState = {
  user: null,
  userInit: { firstName: "", lastName: "", email: "", password: "" },
  errors: null,
  msg: null,
  isLoading: false,
  isLoadingUpload: false,
  loadingUpdatedUser: false,
  userAddress: {
    company_name: "",
    street_address: "",
    town_city: "",
    postcode_zip: "",
    state_country: "",
    phone: "",
    country: "",
  },
  isValidAddress: false,
};

export const createUserAddress = createAsyncThunk(
  "useraddress",
  async (values) => {
    return await callApi(values);
  }
);
export const getUserAddress = createAsyncThunk(
  "getuseraddress",
  async (props) => {
    return await callApi(props);
  }
);

// get user by user id
export const getUser = createAsyncThunk("getuser", async (props) => {
  return await callApi(props);
});

// get user by user id
export const removeCookie = createAsyncThunk("remove_cookie", async () => {
  return await callApi({
    pathOne: "auth",
    pathTwo: "remove_cookie",
    values: {
      cookie_name: "refreshToken",
    },
    method: "post",
  });
});

// Upload user image
export const uploadAvatar = createAsyncThunk("uploadavatar", async (props) => {
  return await callApi(props);
});

// Update user
export const updateUser = createAsyncThunk(
  "auth/update_user",
  async (values) => await callApi(values)
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUpdatedUser: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
    checkUserAddressIsValid: (state, { payload }) => {
      state.isValidAddress = payload.isValidForm;
    },
    getFormState: (state, { payload }) => {
      state.userAddress = payload;
    },
    clearMsg: (state) => {
      state.msg = null;
    },
    addVendorProperty: (state, { payload }) => {
      if (payload.isVendor) {
        state.userInit = { ...state.userInit, vendorName: "" };
      } else {
        const oldUserInit = deepClone(state.userInit);
        delete oldUserInit.vendorName;
        state.userInit = oldUserInit;
      }
    },
  },

  extraReducers: (builder) => {
    // Registation
    builder
      // // Create user address
      .addCase(createUserAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUserAddress.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(createUserAddress.rejected, (state) => {
        state.isLoading = false;
      })
      // Get user address
      .addCase(getUserAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserAddress.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload && payload.user_address) {
          state.userAddress = payload.user_address;
        }
      })
      .addCase(getUserAddress.rejected, (state) => {
        state.isLoading = false;
      })
      // Get user
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload.user) {
          const { firstName, lastName, email, avatar } = payload.user;
          state.user = { firstName, lastName, email, avatar };
        }
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      })
      // Upload avatar
      .addCase(uploadAvatar.pending, (state) => {
        state.isLoadingUpload = true;
      })
      .addCase(uploadAvatar.fulfilled, (state, { payload }) => {
        state.isLoadingUpload = false;

        if (payload.status === 200) {
          tostify("Avatar successfully updated!");
        } else {
          tostify("Something went wrong!");
        }
      })
      .addCase(uploadAvatar.rejected, (state) => {
        state.isLoadingUpload = false;
      })

      // Update user
      .addCase(updateUser.pending, (state) => {
        state.loadingUpdatedUser = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loadingUpdatedUser = false;

        if (payload?.message) {
          tostify(payload.message);
        }
      })
      .addCase(updateUser.rejected, (state) => {
        state.loadingUpdatedUser = false;
      })

      // Remove refresh token
      .addCase(removeCookie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCookie.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(removeCookie.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const {
  addUser,
  addVendorProperty,
  addGoogleUser,
  logout,
  checkUserAddressIsValid,
  getFormState,
  clearMsg,
  addUpdatedUser,
} = userSlice.actions;

export default userSlice.reducer;

// Akjon manus e pare r akjon manuser jibone prithibite sorgo r norog kore dite, valobasa holo obvase porinoto hoaer akta jinis, kintu ata mathay rakhte hobe je obvas hoye gele jeno valobasa kokhonoi kome na jay. karon manus hisebe amara prithibite sob kichu orjon korte parleo somoy kokhono orjon korte pari na ba ferot ante pari na. jar fole apnar valobasar mansutir jotno nin, karon valobasar jotno nile balobas kokhono rong bodlay na.
