import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store";

interface UserState {
  loading: boolean;
  error: string | null;
  successMessage: string | null;
  token: string | null;
  user: {
    email?: string;
    first_name?: string;
    last_name?: string;
  } | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  successMessage: null,
  token: null,
  user: null,
};

interface LoginPayload {
  token: string;
  message: string;
}

interface AuthError {
  status: number;
  message: string;
}

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (token: string) => {
    const response = await axios.get(
      "https://take-home-test-api.nutech-integrasi.com/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginPayload>) => {
      state.token = action.payload.token;
      state.successMessage = action.payload.message;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setUser: (
      state,
      action: PayloadAction<{
        email: string;
        first_name: string;
        last_name: string;
      }>
    ) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.successMessage = null;
      state.error = null;
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          email: action.payload.email,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
        };
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch profile";
      });
  },
});

export const {
  setCredentials,
  setError,
  setUser,
  logout,
  clearError,
  clearMessage,
} = userSlice.actions;

export const loginAndFetchProfile =
  (loginPayload: LoginPayload) => async (dispatch: AppDispatch) => {
    dispatch(setCredentials(loginPayload));
    if (loginPayload.token) {
      dispatch(fetchProfile(loginPayload.token));
    }
  };

export default userSlice.reducer;
