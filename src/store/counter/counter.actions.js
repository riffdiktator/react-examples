import { COUNTER_ACTION_TYPES } from "./counter.types";

export const decreaseCounterAction = () => ({
  type: COUNTER_ACTION_TYPES.DECREASE_COUNTER,
});
export const increaserCounterAction = () => ({
  type: COUNTER_ACTION_TYPES.INCREASE_COUNTER,
});
export const resetCounterAction = () => ({
  type: COUNTER_ACTION_TYPES.RESET_COUNTER,
});
