import {Dispatch} from "redux";

const ADD_POST = "ADD-POST";
const CHANGE_FROM_POST = 'CHANGE-FROM-POST';
const SET_PROFILE_USERS = 'SET_PROFILE_USERS';
const SET_PROFILE_USER_STATUS = 'SET_PROFILE_USER_STATUS';


type ActionsType =
    ReturnType<typeof changePost> |
    ReturnType<typeof addPostText> |
    ReturnType<typeof setProfileUserStatus> |
    ReturnType<typeof setProfileUsers>;

export const addPostText = () => ({type: ADD_POST}) as const
export const setProfileUsers = (profileUsers: any) => ({type: SET_PROFILE_USERS, profileUsers}) as const
export const setProfileUserStatus = (status: string) => ({type: SET_PROFILE_USER_STATUS, status}) as const

export const changePost = (newText: string) => ({
    type: CHANGE_FROM_POST, newText: newText
}) as const

export type InitialStateProfileType = typeof initialStateProfile

let initialStateProfile = {}
const contentReducer = (state: InitialStateProfileType = initialStateProfile, action: ActionsType): InitialStateProfileType => {

    switch (action.type) {
        case SET_PROFILE_USER_STATUS: {
            return {...state}
        }
        case ADD_POST:

            return {...state}

        case CHANGE_FROM_POST:
            return {...state}
        case SET_PROFILE_USERS:
            return {...state}
        default:
            return state
    }
}
export const getProfileTC = () => (dispatch: Dispatch) => {
    // userAPI.getProfile(userId)
    //     .then((data: ProfileUsersType) => {
    //         dispatch(setProfileUsers(data))
    //     });
}
export const getProfileStatusTC = (userId: string | undefined) => (dispatch: Dispatch) => {

}
export const updateProfileStatusTC = (status: string) => (dispatch: Dispatch) => {
    // profileAPI.updateProfileStatus(status)
    //     .then(res=>{
    //         if(res.data.resultCode === 0){
    //             dispatch(setProfileUserStatus(status))
    //         }
    //
    //     })

}
export default contentReducer