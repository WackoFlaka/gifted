import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

function _drawGifts() {
    const gifts = AppState.gifts 
    let htmlString = ''
    gifts.forEach(gift => htmlString += gift.giftCardHTMLTemplate)
    setHTML('giftList', htmlString)
}

export class GiftController {
    constructor() {
        // console.log('controller loaded');
        AppState.on('gifts', _drawGifts)
        AppState.on('account', this.getGifts)
    }
    
    async getGifts() {
        try {
            console.log('getting gifts')
            await giftService.getGifts()
            
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
    
    
    async createGift() {
        try {
            console.log('creating gift');
            event.preventDefault()
            
            const form = event.target
            const giftFormData = getFormData(form)
            giftService.createGift(giftFormData)
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
    
     async openGift(id) {
        try {
            Pop.success('Opening gift!')
            await giftService.openGift(id)
        } catch (error) {
            console.error();
            Pop.error(error)
        }
    }
}