// sorted queue with shortest distance and earliest push first
class Queue {
  constructor() {
    this.array = []
  }

  getFirstElem = () => {
    return this.array.shift()
  }
  add = (elem) => {
    var added = false
    for (let i = 0; i < this.array.length; i++) {
      if (elem.dist < this.array[i].dist) {
         this.array.splice(i, 0, elem)
        added = true
        break
      }
    }
    if (!added) this.array.push(elem)
  }
}

export default Queue
