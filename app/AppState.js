import { Gift } from './models/Gift.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  
  /** @type {Gift[]} */
  gifts = [
    new Gift({
      url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmgwaHNqdjh6bm5lb2VyZWl2azRndGt3bnN4c3pqcG1oNWpnaG95cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs7W7ACsSvyY5WoM/giphy.gif",
      tag: 'this is my gift',
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())