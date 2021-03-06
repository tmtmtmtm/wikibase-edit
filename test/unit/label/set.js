require('should')
const { __ } = require('config')
const language = 'fr'
const setLabel = __.require('lib/label/set')
const { randomString, someEntityId } = __.require('test/unit/utils')

describe('label', () => {
  it('should throw if not passed an entity', () => {
    setLabel.bind(null, {}).should.throw('invalid entity')
  })

  it('should throw if not passed a language', () => {
    setLabel.bind(null, { id: someEntityId }).should.throw('invalid language')
  })

  it('should throw if not passed a label', () => {
    setLabel.bind(null, { id: someEntityId, language }).should.throw('missing label')
  })

  it('should return an action and data', () => {
    const value = `Bac à Sable (${randomString()})`
    const { action, data } = setLabel({ id: someEntityId, language, value })
    action.should.equal('wbsetlabel')
    data.id.should.equal(someEntityId)
    data.language.should.equal(language)
    data.value.should.equal(value)
  })
})
