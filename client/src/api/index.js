import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000/api',
})

export const insertStock = payLoad =>api.post(`/stock`,payLoad)

const apis ={
    insertStock
}
export default apis

