function posts(parent, args, ctx, info) {
  return ctx.db.query.posts({}, info)
}

function post(parent, args, ctx, info) {
  return ctx.db.query.post({ where: { ...args } }, info)
}

function projects(parent, args, ctx, info) {
  return ctx.db.query.projects({}, info)
}

function project(parent, args, ctx, info) {
  return ctx.db.query.project({ where: { ...args } }, info)
}

function users(parent, args, ctx, info) {
  console.log(ctx.db.query)
  return ctx.db.query.users({ where: { ...args } }, info)
}

// async function feed(parent, args, ctx, info) {
//   const { filter, first, skip } = args // destructure input arguments
//   const where = filter
//     ? { OR: [{ url_contains: filter }, { description_contains: filter }] }
//     : {}
//
//   const allLinks = await ctx.db.query.links({})
//   const count = allLinks.length
//
//   const queriedLinkes = await ctx.db.query.links({ first, skip, where })
//
//   return {
//     linkIds: queriedLinkes.map(link => link.id),
//     count
//   }
// }

module.exports = {
  post,
  posts,
  projects,
  project,
  users
}
