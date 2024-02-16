import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"

class GiftService {
    async createGift(form) {
        const response = await api.post('api/gifts', form)
        const newGift = new Gift(response.data)
        AppState.gifts.push(newGift)
        
    }
    
    async getGifts() {
        const response = await api.get('api/gifts')
        console.log('here are all the objects on the gifts api in sandbox', response.data)
        const newGifts = response.data.map(giftPOJO => new Gift(giftPOJO))
        AppState.gifts = newGifts
    }
    
    async openGift(id) {
       const index = AppState.gifts.findIndex(gift => gift.id == id)
       if(index == -1) {
        throw new error('naur')
       }
       const foundGift = AppState.gifts[index]
       const update = {opened: !foundGift.opened}
       
       const response = await api.put(`api/gifts/${id}`, update)
       const updateGift = new Gift(response.data)
       AppState.gifts.splice(index, 1, updateGift)
        
    }
}

export const giftService = new GiftService()