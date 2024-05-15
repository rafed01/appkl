import { ACCESS_TOKEN, CURRENT_USER } from "../constants";



export const saveCurrentUser = (user) => {
    localStorage.setItem(CURRENT_USER, JSON.stringify(user))

};

export const getCurrentUser = () => {
    const user = localStorage.getItem(CURRENT_USER);
    return user ? JSON.parse(user) : null;
};

export const removeCurrentUser = () => {
    localStorage.removeItem(CURRENT_USER)
};

export const getUserId = async (e) => {
    const usernow = getCurrentUser();
    const userid = usernow.user_id;
    // console.log("current user =", userid);
    return Number(userid);
  };