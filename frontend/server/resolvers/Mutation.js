const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getAndAuthUserId } = require('../utils')

function createPost(parent, { title, content, slug }, ctx, info) {
  getAndAuthUserId(ctx)
  return ctx.db.mutation.createPost(
    {
      data: {
        title,
        content,
        slug
      }
    },
    info
  )
}

function deletePost(parent, { id }, ctx, info) {
  getAndAuthUserId(ctx)
  return ctx.db.mutation.deletePost({ where: { id } }, info)
}

function createProject(parent, args, ctx, info) {
  getAndAuthUserId(ctx)
  return ctx.db.mutation.createProject(
    {
      data: {
        ...args
      }
    },
    info
  )
}

function deleteProject(parent, { id }, ctx, info) {
  getAndAuthUserId(ctx)
  return ctx.db.mutation.deleteProject({ where: { id } }, info)
}

async function signup(parent, args, ctx, info) {
  const password = await bcrypt.hash(
    args.password,
    Number(process.env.SALTROUNDS)
  )
  const user = await ctx.db.mutation.createUser({
    data: { ...args, password }
  })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

async function login(parent, args, ctx, info) {
  const user = await ctx.db.query.user({ where: { email: args.email } })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user
  }
}

module.exports = {
  createPost,
  deletePost,
  createProject,
  deleteProject,
  signup,
  login
}
