import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export interface ICalc {
  id: number;
  value1: string;
  symbol: string;
  value2: string;
  result: string;
}

interface ICalcPayload {
  value1: string;
  symbol: string;
  value2: string;
  result: string;
}

interface IAddCalculationAction {
  payload: ICalcPayload;
  type: string;
}

interface IDeleteCalcAction {
  payload: { id: number };
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
        id: Math.floor(Math.random() * 100),
      });
    },
    deleteCalc: (state, action: IDeleteCalcAction) => {
      return state.filter((calc) => calc.id !== action.payload.id);
    },
  },
});

export const { addCalculation, deleteCalc } = CalcSlice.actions;

export const store = configureStore({
  reducer: {
    calcList: CalcSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
