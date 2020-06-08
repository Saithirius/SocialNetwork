import Axios from "axios";

const axiosEl = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 
    'API-KEY': 'fa2e4be3-d03c-412f-92be-944e07a9f8f0' 
  },
})

export const API = {

  login(formData) {
    return (
      axiosEl.post('auth/login', { email: formData.email, password: formData.password, rememberMe: formData.rememberMe})
      .then((response) => response.data)
    )
  },

  logout(formData) {
    return (
      axiosEl.delete('auth/login')
      .then((response) => response.data)
    )
  },

  getProfile(userID) {
    return (
      axiosEl.get('profile/' + (userID ? userID : 7830))
        .then((response) => response.data)
    );
  },

  getStatus(userID) {
    return (
      axiosEl.get('profile/status/' + userID)
        .then((response) => response.data)
    );
  },

  changeStatus(text) {
    return (
      axiosEl.put('profile/status', {status: text})
        .then((response) => response.data)
    );
  },

  getUsers(pageSize, currentPage) {
    return (
      axiosEl.get(`users?count=${pageSize}&page=${currentPage}&friend=true`)
        .then((response) => response.data)
    );
  },

  follow(userID) {
    return (
      axiosEl.post(`follow/${userID}`)
        .then((response) => response.data)
    )
  },

  unfollow(userID) {
    return (
      axiosEl.delete(`follow/${userID}`)
        .then((response) => response.data)
    )
  },

  checkAuth() {
    return (
      axiosEl.get('auth/me')
      .then((response) => response.data)
    )
  },
}
