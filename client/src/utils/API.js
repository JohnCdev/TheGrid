import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  authTest: (token,) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }

    return axios.post('/api/users/auth-test',{hello: 'hello'}, config)
  },

  friendRequest: (command, sender, receiver, token) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
    const payLoad = {
      sender: sender,
      receiver: receiver
    };
    switch(command){
      case('request-friend'):
        return (axios.post('/api/profiles/request-friend', payLoad, config))
      case('accept-friend-request'):
        return axios.post('/api/profiles/accept-friend', payLoad, config)
      case('remove-friend'):
        return axios.post('/api/profiles/remove-friend', payLoad, config)
    }
  },

  saveUser: userData => axios.post('/api/users/create-new-user', userData),

  userLogIn: userData => axios.post('/api/users/login', userData),

  getUserProfile: profile => axios.get(`/api/profiles/get-profile/${profile}`),

  getProfile: userData => axios.post('api/profiles/profile', userData),

  updateProfile: userData => axios.put('/api/profiles/profile', userData),

  getAllyList: allyData => axios.post('api/profiles/friend-list', allyData),

  createPost: postData => axios.post('/api/posts/new-post', postData),
  
  getUserPosts: postData => axios.post('/api/posts/user-posts', postData),

  //getFeedPosts: postData => axios.get('/api/posts/feed-posts', postData)

  

};
