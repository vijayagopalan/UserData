import { createStore } from "redux";

const addUser='ADDUSER';
const removeUser='REMOVEUSER';
const initialstate = {user:[{
    name: 'aa',
    email: 'a',
    phonenumber: 'a',
    address: 'a'
    }]}
export const adduserfunction=()=>
{
    return{
        type:'ADDUSER'
    }
}
export const removeuserfunction=()=>
{
    return{
        type:'REMOVEUSER'
    }
}
const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case addUser: return {
            ...state,
            user:[...state.user,{
            name: 'aa',
            email: 'a',
            phonenumber: 'a',
            address: 'a'
            }]
        }
        case removeUser: return {
         state
        }
        default: return state
    }
}
const store = createStore(userReducer);
export default store;