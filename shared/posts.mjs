import arc from '@architect/functions'

const deletePost = async function (key) {
  const tables = await arc.tables()
  await tables.posts.delete({ key })
  return { key }
}

const upsertPost = async function (post) {
  const tables = await arc.tables()
  return tables.posts.put(post)
}

const getPost = async function (key) {
  const tables = await arc.tables()
  return tables.posts.get({ key })
}

const getPosts = async function () {
  const tables = await arc.tables()
  const result = await tables.posts.scan({})
  return result.Items || []
}

export {
  deletePost,
  getPost,
  getPosts,
  upsertPost
}
