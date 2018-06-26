import socialChannels from './social-channels'
import organizationTypes from './organization-types'

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

export default Object.keys(lists)
  .reduce((key, collections) => {
    collections[key] = new Collection(lists[key])
    return collections
  }, {})
