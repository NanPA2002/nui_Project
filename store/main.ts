import {defineStore} from 'pinia'

interface State {
    token : string
    userId : string

}

export const useIndexStore = defineStore('index',{
    state: (): State => ({
        token: '',
        userId: '', 
    })
})