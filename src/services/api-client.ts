import axios from "axios"


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9a8cf794635b4d879f94cb7de4a1aef5'
    }
})