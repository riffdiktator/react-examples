import { COUNTER_ACTION_TYPES } from "./counter.types";

const COUNTER_INITIAL_STATE = {
  value: 0,
};

export const counterReducer = (state = COUNTER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTER_ACTION_TYPES.DECREASE_COUNTER:
      return {
        ...state,
        value: state.value > 0 ? state.value - 1 : 0,
      };
    case COUNTER_ACTION_TYPES.INCREASE_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    case COUNTER_ACTION_TYPES.RESET_COUNTER:
      return {
        ...state,
        value: 0,
      };
    case COUNTER_ACTION_TYPES.SET_COUNTER:
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }
};
