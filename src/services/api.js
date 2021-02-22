import axios from '@/services/axios';

const api = {
    auth: {
        async login(email, password) {
            return axios.post('login', { email, password });
        },

        async register(payload) {
            return axios.post('register', payload)
        }
    },

    blog: {
        async createPost(payload) {
            return axios.post('posts', payload)
        },
        async getPosts() {
            return axios.get('posts')
        },
        async getPostByID(id) {
            return axios.get(`posts/${id}`)
        },
        async search(value) {
            return axios.get(`search/${value}`)
        },
        async vote(payload) {
            return axios.post('votes', payload)
        },
        async deleteVote(id) {
            return axios.delete(`votes/${id}`)
        },
        async getNewRegistrations() {
            return axios.get(`get-users-without-access`)
        },
        async getMyPosts() {
            return axios.get('my-posts')
        },
        async giveAccess(id) {
            return axios.get(`change-access/${id}`)
        },
        async updatePost(id, payload) {
            return axios.put(`posts/${id}`, payload)
        },
        async deletePost(id) {
            return axios.delete(`posts/${id}`)
        }

    }
};

export default api;