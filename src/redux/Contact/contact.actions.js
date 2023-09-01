import { SETCURRENTCONTACT } from './contact.types';

export const setCurrentContact = (mydata, mymail) => {
    return {
        type: SETCURRENTCONTACT,
        data: mydata,
        mail: mymail
    };
};
