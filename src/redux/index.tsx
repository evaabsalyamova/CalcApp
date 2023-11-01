import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export interface ICalc {
  value1: number;
  symbol: string;
  value2: number;
  result: number;
}

export interface IAddCalculationAction {
  payload: ICalc;
  type: string;
}

const initialState: ICalc[] = [];

const CalcSlice = createSlice({
  name: "CalculationList",
  initialState,
  reducers: {
    addCalculation: (state, action: IAddCalculationAction) => {
      state.push({
        value1: action.payload.value1,
        symbol: action.payload.symbol,
        value2: action.payload.value2,
        result: action.payload.result,
      });
    },
  },
});

export const { addCalculation } = CalcSlice.actions;

export const store = configureStore({
  reducer: {
    calcList: CalcSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
