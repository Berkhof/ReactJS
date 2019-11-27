import axios from 'axios'

const KEY = 'AIzaSyA2drS38I9ZQpGTIrodQDi2jD0eJHduHl8';


export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
       part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


