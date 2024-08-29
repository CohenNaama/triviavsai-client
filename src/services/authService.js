import { Post } from "../data/apiClient";

export const registerUser = async (userData) => {
    const form = new FormData();
    form.append('username', userData.username);
    form.append('email', userData.email);
    form.append('password', userData.password);
    if (userData.profilePicture) {
      form.append('profile_picture', userData.profilePicture);
    }
  
    const response = await Post('/users', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    
    return response;
  };
  
  export const loginUser = async (credentials) => {
    const response = await Post('/login', credentials);
    return response;
  };