import Api from '@/services/Api'

export default {
    index(params) {
        return Api().get('/historys', {
            params
        })
    },
    post(history) {
        return Api().post('/historys', history)
    }
}