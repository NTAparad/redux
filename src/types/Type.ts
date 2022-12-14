import {HobbyState} from "./Hobby";
import {UserState} from "../reducers/user";

export type Type = {
    hobby: HobbyState
    user: UserState
}

export type HobbyType = {
    id: number
    hobby: string
}