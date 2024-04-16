import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notification(_state, action) {
      return action.payload;
    },
    clearNotification(_state, _action) {
      return '';
    }
  }
});

export const { notification, clearNotification } = notificationSlice.actions;

export const setNotification = (text, timeout) => {
  return async (dispatch) => {
    dispatch(notification(text));
    await setTimeout(() => {
      dispatch(clearNotification());
    }, timeout * 1000);
  };
};

export default notificationSlice.reducer;
