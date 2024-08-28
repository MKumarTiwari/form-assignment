import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./UserList";


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUsers: (state,action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, ...updatedDetails } = action.payload;
            const userIndex = state.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                state[userIndex] = { ...state[userIndex], ...updatedDetails };
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            return state.filter(user => user.id !== id);
        }
    }
})

export const {addUsers,updateUser,deleteUser} = userSlice.actions

export default userSlice.reducer