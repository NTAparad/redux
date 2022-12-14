import {HobbyAction, HobbyState} from "../types/Hobby";

export type UserState = {
    list: string[]
    userToken: string | null
}

const initialState: UserState = {
    list: ['Listening to music'],
    userToken: '',
}
const userReducer = (state = initialState, action: HobbyAction) => {
    return state;
}

export default userReducer;