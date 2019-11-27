import axios from 'axios'; // a js library to make http requests

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 95837d9bf2e718c51b6ec872241157ee7e6b3acb3bd4ffb294957a3f18c51afd'
    }
});
