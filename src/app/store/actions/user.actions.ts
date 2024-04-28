import { createAction, props } from "@ngrx/store";

export const loginSuccess = createAction(
    '[User] Add user',
    props<{user: string}>()
);
