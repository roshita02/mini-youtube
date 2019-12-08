import axios from 'axios';
const KEY ='AIzaSyAuQV_7OocLjgoloa_-0KXAAnkVReZkHHk';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
