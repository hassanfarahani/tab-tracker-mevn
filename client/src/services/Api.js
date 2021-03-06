import axios from 'axios'
import store from '@/store'

export default () => {
    return axios.create({
        // baseURL: `http://localhost:8081`,
        baseURL: `https://tab-tracker-mevn.herokuapp.com/`,
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}