const express = require('express')
require('dotenv').config()
import { getHasuraSDK } from '@chaingraph.io/hasura-client'
const bodyParser = require('body-parser')
import { URL } from 'url'

const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = Number(process.env.PORT || 3000)

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', async (req: any, res: any) => {
  console.log({
    hasuraApi: process.env.HASURA_API!,
    adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
  })

  const hasura = getHasuraSDK({
    url: process.env.HASURA_API!,
    adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
  })

  console.log('body', req.body)
  console.log('headers', req.headers)
  const hostname = new URL(req.body.headers['Origin'] || req.body.headers['origin']).hostname
  console.log('hostname:', hostname)

  const apiKey: string = req.body.headers['x-chaingraph-api-key'] || ''

  const result = await hasura.query.get_api_user_by_key({ api_key: apiKey })

  console.log('users', result?.data?.api_users)
  if (result?.data?.api_users.length === 0) {
    return res.sendStatus(404).end()
  }

  const user = result?.data?.api_users[0]

  if (!user?.domain_names?.split(',').includes(hostname)) {
    return res.sendStatus(404).end()
  }

  res.send({
    'X-Hasura-User-Id': `${user.id}`,
    'X-Hasura-Role': 'api_user',
    'X-Hasura-Is-Owner': 'true',
    'Cache-Control': 'max-age=600',
  })
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
