import {HobbyAction, HobbyState} from "../types/Hobby";

const initialState: HobbyState = {
    list: [{
        id: 1,
        hobby: 'Listening to music'
    }
    ],
    userToken: '',
}
const hobbyReducer = (state = initialState, action: HobbyAction) => {
    console.log(action);
    switch (action.type) {
        case 'addHobby': {
            console.log(action.payload);
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        }
        default:
            return state;
    }
};
export default hobbyReducer;