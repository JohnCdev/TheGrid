import axios from "axios";

export default {
  authTest: token => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    return axios.post("/api/users/auth-test", { hello: "hello" }, config);
  },

  friendRequest: (command, sender, receiver, token) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
    const payLoad = {
      sender: sender,
      receiver: receiver
    };
    switch (command) {
      case "request-friend":
        return axios.post("/api/profiles/request-friend", payLoad, config);
      case "accept-friend-request":
        return axios.post("/api/profiles/accept-friend", payLoad, config);
      case "remove-friend":
        return axios.post("/api/profiles/remove-friend", payLoad, config);
    }
  },

  ///users
  saveUser: userData => axios.post("/api/users/create-new-user", userData),

  userLogIn: userData => axios.post("/api/users/login", userData),

  ///profiles
  getUserProfile: profile => axios.get(`/api/profiles/get-profile/${profile}`),

  getProfile: userData => axios.post("/api/profiles/profile", userData),

  updateProfile: userData => axios.put("/api/profiles/profile", userData),

  getAllyList: allyData => axios.post("/api/profiles/friend-list", allyData),

  getNotifications: userName =>
    axios.get(`/api/profiles/get-notifications/${userName}`),

  markNotificationAsRead: notificationData =>
    axios.post("/api/profiles/mark-notification-as-read", notificationData),

  ///posts
  createPost: postData => axios.post("/api/posts/new-post", postData),

  getUserPosts: postData => axios.post("/api/posts/user-posts", postData),

  getFeedPosts: postData => axios.post("/api/posts/feed-posts", postData),

  getClanPosts: postData => axios.post("/api/posts/clan-posts", postData),

  createComment: commentData => axios.post("/api/posts/new-comment", commentData),

  searchForUsers: searchQuery =>
    axios.get(`/api/profiles/search/${searchQuery}`),

  ///clans
  createClan: (clanData, token) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
    return axios.post("/api/clans/create-clan", clanData, config);
  },

  getClan: clanName => axios.get(`/api/clans/${clanName}`),

  getClanList: payLoad => axios.post('/api/clans/get-clan-list', payLoad),

  joinClan: payLoad => axios.post('/api/clans/join-clan', payLoad),

  leaveClan: payLoad => axios.post ('/api/clans/leave-clan', payLoad),

  searchForClans: searchQuery => axios.get(`/api/clans/search/${searchQuery}`)
};
