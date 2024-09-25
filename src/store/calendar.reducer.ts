import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any[] = ["12:00", "17:00", "21:00"];

const loadingSlice = createSlice({
	name: "answer",
	initialState,
	reducers: {
		addCalendar: (state: any[], action: PayloadAction<any>) => {
			state.push(action.payload);
		},
		updateCalendar: (state: any[], action: PayloadAction<{ index: number; value: any }>) => {
			state[action.payload.index] = action.payload.value;
		},
		removeCalendar: (state: any[], action: PayloadAction<any>) => {
			//state: array, action.payload: currentValue
			const currentCalendarIndex = state.indexOf(action.payload);
			delete state[currentCalendarIndex];
			// console.log(state);
		},
	},
});

export const addCalendar = loadingSlice.actions.addCalendar;
export const updateCalendar = loadingSlice.actions.updateCalendar;
export const removeCalendar = loadingSlice.actions.removeCalendar;
export const calendarReducer = loadingSlice.reducer;
