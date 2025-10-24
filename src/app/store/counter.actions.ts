import { Action, createAction, props } from "@ngrx/store";

export const INCREMENT = '[Counter] Increment';

export const increment = createAction(
  INCREMENT,
  props<{value: number}>()
);

export class IncrementAction implements Action {
  readonly type = INCREMENT;

  constructor(public value: number) {}
}

export type CounterActions = IncrementAction;
