import {HobbyType} from "../types/Type";

export const addHobby = (hobby: HobbyType) => {
    return {
        type: 'addHobby',
        payload: hobby
    }
}

export const setHobby = (hobby: HobbyType) => {
    return {
        type: 'setHobby',
        payload: hobby
    }
}