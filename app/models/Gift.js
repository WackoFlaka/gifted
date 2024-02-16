import { generateId } from "../utils/GenerateId.js"

export class Gift {
    constructor(data) {
        this.id = data.id || generateId()
        this.tag = data.tag
        this.url = data.url 
        this.opened = data.opened || false
        this.creatorId = data.creatorId
        this.profileIdsOpened = data.profileIdsOpened 
    }
    
    get giftCardHTMLTemplate() {
        if(this.opened == true) {
            return /*html*/ `
            <div class="col-4">
              <div class="overlay">
                  <div class="card" style="width: 14rem;">
                      <img src="${this.url}" class="card-img-top" alt="cupcake gif">
                      <div class="card-body">
                      <p class="card-text">${this.tag}</p>
                      </div>
                  </div>
                  </div>
              </div>
            `
        } 
        return /*html*/ `
        <div class="col-4">
              <div class="overlay">
                  <div class="card" style="width: 14rem;" onclick="app.GiftController.openGift('${this.id}')">
                      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWhlaTZ5Nmp6NWU4OHhja25jNjZpeDlzazQ2d2p2cG44bGs3emx2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VIe5NOnlPxJ9FcONBq/giphy.gif" class="card-img-top" alt="cupcake gif">
                      <div class="card-body">
                      <p class="card-text text-center">Click to open</p>
                      </div>
                  </div>
                  </div>
              </div>
        `
    }
    
}



// {
//     "tag": {
//       "type": "String",
//       "maxlength": 120
//     },
//     "url": {
//       "type": "String",
//       "required": true,
//       "maxLength": 500
//     },
//     "opened": {
//       "type": "Boolean",
//       "default": false
//     },
//     "creatorId": {
//       "type": "ObjectId",
//       "required": true,
//       "ref": "Account"
//     },
//     "profileIdsOpened": [
//       {
//         "type": "ObjectId",
//         "ref": "Account"
//       }
//     ]
//   }