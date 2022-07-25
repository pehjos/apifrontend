import axios from 'axios';


const API = axios.create({ baseURL: 'https://apiproject-alpha.vercel.app/' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



export const fetchPosts2 = async ({ pageParam = 1 }) => {
  const response = await fetch(
      `https://apiproject-alpha.vercel.app/cart?page=${pageParam}&limit=6`,
 
  );
  const results = await response.json();
      return { results, nextPage: pageParam + 1, totalPages: 100 };
  }; 






export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`);
export const fetchPostsBySearch1 = (searchQuery) => API.get(`/posts/search1?searchQuery=${searchQuery.search || 'none'}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);
export const fetchCart = (page) => API.get(`/book?page=${page}`);
export const deleteCart = (id) => API.delete(`/book/${id}`);
export const createCart = (newData) => API.post('/book', newData);
export const fetchOrder = (page) => API.get(`/order?page=${page}`);
export const deleteOrder = (id) => API.delete(`/order/${id}`);
export const createOrder = (newData) => API.post('/order', newData);

export const fetchChart = (page) => API.get(`/chart?page=${page}`);
export const deleteChart = (id) => API.delete(`/chart/${id}`);
export const createChart = (newData) => API.post('/chart', newData);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);