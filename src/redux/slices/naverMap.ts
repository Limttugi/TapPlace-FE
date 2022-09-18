import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NaverMapState {
  myLocation: {
    latitude: any;
    longitude: any;
  };
}

const initialState: NaverMapState = {
  myLocation: {
    latitude: 37.3595804,
    longitude: 127.105399,
  },
};

export const naverMap = createSlice({
  name: 'naver',
  initialState,
  reducers: {
    setMyLocation(
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>,
    ) {
      state.myLocation.latitude = action.payload.latitude;
      state.myLocation.longitude = action.payload.longitude;
    },
  },
});

export const { setMyLocation } = naverMap.actions;

export default naverMap;
