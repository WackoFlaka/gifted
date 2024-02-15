export class Gift {
    constructor(data) {
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
                      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmgwaHNqdjh6bm5lb2VyZWl2azRndGt3bnN4c3pqcG1oNWpnaG95cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs7W7ACsSvyY5WoM/giphy.gif" class="card-img-top" alt="cupcake gif">
                      <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
                  </div>
              </div>
            `
        } 
        return /*html*/ `
        <div class="col-4">
              <div class="overlay">
                  <div class="card" style="width: 14rem;">
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