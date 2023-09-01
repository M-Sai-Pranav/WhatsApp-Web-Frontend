import { SETCURRENTCONTACT } from "./contact.types";
const INITIAL_STATE = {
    currentcontact: '',
    currentmail: ''
};
const reducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case SETCURRENTCONTACT:
           console.log("-----action conatct---> ",action.data)
           console.log("-----action mail---> ", action.mail)
           return {
             ...state, currentcontact: action.data, currentmail: action.mail
           };
         default: return state;
    }
};
export default reducer;

