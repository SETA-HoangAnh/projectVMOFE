import instance from './instance';

export const sendOTP = (email) => {
    return instance.post('auth/send-otp', { email });
};

export const checkOtp = (data) => {
    return instance.post('auth/user/otp-verify', data);
};

export const checkTOtp = (data) => {
    return instance.post('authenticate/verify', data);
};

export const changePassword = (data) => {
    return instance.post('auth/user/passwordChange', data);
};

export const signUp = (data) => {
    return instance.post('authenticate/signup', data);
};

export const signIn = (data) => {
    return instance.post('authenticate/login', data);
};
