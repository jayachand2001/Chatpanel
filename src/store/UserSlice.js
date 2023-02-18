import { createSlice } from "@reduxjs/toolkit";

import profile from "../assets/images/harveyspecter.png"

const userData = {
    userList: [
        {
            name: "user1",
            lastmsg: "this is the last msg",
            dp: profile,
            msg: [{type: "reply", text: "hello"}, {type: "msg", text: "hello how are you"},{type: "reply", text: "this is another reply"},{type:"msg", text: "When you're backed against the wall, break the god damn thing down."}]
        },
        {
            name: "user2",
            lastmsg: "this is the last msg",
            dp: profile,
            msg: [{type: "reply", text: "hello"}, {type: "msg", text: "hello how are you"}]
        },
        {
            name: "user3",
            lastmsg: "this is the last msg",
            dp: profile,
            msg: [{type: "reply", text: "hello"}, {type: "msg", text: "hello how are you"}]
        },
        {
            name: "user4",
            lastmsg: "this is the last msg",
            dp: profile,
            msg: [{type: "reply", text: "hello"}, {type: "msg", text: "hello how are you"}]
        },
        {
            name: "user5",
            lastmsg: "this is the last msg",
            dp: profile,
            msg: [{type: "reply", text: "hello"}, {type: "msg", text: "hello how are you"}]
        },
        {
            name: "user6",
            lastmsg: "this is the last msg",
            dp: profile,
            msg: [{type: "reply", text: "hello"}, {type: "msg", text: "hello how are you"}]
        },
    ],

    activeUser: { name: "user6",
    lastmsg: "this is the last msg",
    dp: profile,
    msg: [{type: "reply", text: "hello"}, {type: "msg", text: "hello how are you"}]
}
}



const UserSlice = createSlice({
    name: "userslice123",
    initialState: userData,
    reducers: {
        getactiveuser: function(state, action){
            return state.activeUser;
        },

        getuserList: function(state, action){
            return state.userList;
        },

        setActiveUser: function(state, action){
            const user = state.userList.filter(user => {
                return user.name === action.payload
            })
            state.activeUser = user[0];

        },
        getUserNo: function(state, action){
            return state.userList.length;
        },

        updateUserList: function(state, action){
            state.userList = [...state.userList, action.payload]
        }
    }
})

export const {getactiveuser, getuserList, setActiveUser, getUserNo, updateUserList} = UserSlice.actions;

export default UserSlice;