import hobby from "../reducers/hobby";
import {HobbyType} from "./Type";

export interface HobbyState {
    list: HobbyType[],
    userToken: string
}

type AddHobby = {
    type: "addHobby";
    payload: HobbyType;
};

type SetHobby = {
    type: "setHobby";
    payload: HobbyType;
};

export type HobbyAction = AddHobby | SetHobby;
