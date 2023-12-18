import myAxios from "../plugins/MyAxios.ts";

import {getCurrentUserState, setCurrentUserState} from "../states/user.ts";

/**
 * 获取当前登录获取
 */
const getCurrentUser = async () => {
    let currentUser = getCurrentUserState();
    if (currentUser) {
        return currentUser;
    }
    // 远程获取
    currentUser = await reqRemoteCurrentUser();
    return currentUser;
}

/**
 * 请求用户信息
 */
const reqRemoteCurrentUser = async () => {
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUserState(res.data)
        return res.data;
    } else {
        return null;
    }
}

export {
    getCurrentUser,
    reqRemoteCurrentUser
}