import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ka6xhw.deta.dev/bi/'
})

export default api