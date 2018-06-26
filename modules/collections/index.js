const socialChannels = require('./social-channels')
const organizationTypes = require('./organization-types')

const lists = {
  socialChannels,
  organizationTypes
}

class Collection {
  constructor (list) {
    this.list = list
    this.names = Object.keys(list).sort()
  }
}

module.exports = Object.keys(lists)
  .reduce((collections, key) => {
    collections[key] = new Collection(lists[key])
    return collections
  }, {})
