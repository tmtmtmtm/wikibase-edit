require('should')
const config = require('config')
const { __ } = config
const wbEdit = __.require('.')(config)
const { randomString } = __.require('test/unit/utils')
const { getSandboxItemId } = __.require('test/integration/utils/sandbox_entities')
const language = 'fr'

describe('alias add', function () {
  this.timeout(20 * 1000)
  before('wait for instance', __.require('test/integration/utils/wait_for_instance'))

  it('should add an alias', async () => {
    const id = await getSandboxItemId()
    const value = randomString()
    const res = await wbEdit.alias.add({ id, language, value })
    res.success.should.equal(1)
  })

  it('should add several aliases', async () => {
    const id = await getSandboxItemId()
    const aliases = [
      randomString(),
      randomString(),
      randomString(),
      randomString()
    ]
    const res = await wbEdit.alias.add({ id, language, value: aliases })
    res.success.should.equal(1)
  })
})
