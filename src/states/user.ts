import {UserType} from "../models/user";

// 全局保存登录用户信息
let currentUser: UserType;

const setCurrentUserState = (user: UserType) => {
    currentUser = user;
}

const getCurrentUserState = (): UserType => {
    return currentUser;
}

export {
    setCurrentUserState,
    getCurrentUserState,
}