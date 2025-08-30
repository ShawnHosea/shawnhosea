import arc from '@architect/functions'

const deleteWebMention = async function (key) {
  const tables = await arc.tables()
  await tables.webmentions.delete({ key })
  return { key }
}

const upsertWebMention = async function (webmention) {
  const tables = await arc.tables()
  return tables.webmentions.put(webmention)
}

const getWebMention = async function (key) {
  const tables = await arc.tables()
  return tables.webmentions.get({ key })
}

const getWebMentions = async function () {
  const tables = await arc.tables()
  const result = await tables.webmentions.scan({})
  return result.Items || []
}

export {
  deleteWebMention,
  getWebMention,
  getWebMentions,
  upsertWebMention
}
