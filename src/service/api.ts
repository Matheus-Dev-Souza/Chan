import axios from 'axios';
import md5 from 'md5';

const publicKey = '8584859d5cd80ab50a983cd5d7bcb255';
const privateKey = '99100420a3fcab36a1cb9feb834916ba7a0ce236';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params:{
        ts: time,
        apikey: publicKey,
        hash: 
    
    },
});

export default api