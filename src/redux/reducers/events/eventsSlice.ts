import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/redux/store";

type EventSlotType = {
  start: Date;
  end?: Date | string;
};

type InitialStateType = {
  event: EventSlotType;
  events: EventSlotType[];
  eventPage: Date;
};

const initialState: InitialStateType = {
  event: {
    start: new Date(),
  },
  events: [],
  eventPage: new Date(),
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEventData: (state, action: PayloadAction<EventSlotType>) => {
      state.event = action.payload;
    },

    setEvents: (state, action: PayloadAction<EventSlotType[]>) => {
      state.events = action.payload;
    },
    setEventPage: (state, action: PayloadAction<Date>) => {
      state.eventPage = action.payload;
    },
  },
});

export const { setEventData, setEvents, setEventPage } = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.eventsData.events;
export const selectEvent = (state: RootState) => state.eventsData.event;
export const selectEventPage = (state: RootState) => state.eventsData.eventPage;

export default eventsSlice.reducer;
