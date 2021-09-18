const express = require('express')
require('dotenv').config()
import { getHasuraSDK } from '@chaingraph.io/hasura-client'
import { log } from './logger'
const bodyParser = require('body-parser')
import { URL } from 'url'
import { config } from './config'

const hasura = getHasuraSDK({
  url: config.hasura_api,
  adminSecret: config.hasura_admin_secret,
})

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', async (req: any, res: any) => {
  // log.info('body', req.body)
  // log.info('headers', req.headers)
  let user
  const apiKey: string = req.body.headers['x-chaingraph-api-key'] || ''

  // skip validations if using codegen key
  if (apiKey !== config.chaingraph_codegen_key) {
    log.info(`running api key validation for non codegen api key = ${apiKey}`)

    // find user for this key. keys are unique
    const result = await hasura.query.get_api_user_by_key({ api_key: apiKey.toString() })
    if (result?.data?.api_users.length === 0) return res.sendStatus(404).end()
    user = result?.data?.api_users[0]

    // validate it is valid hostname
    const hostname = new URL(req.body.headers.Origin || req.body.headers.origin).hostname
    if (!user?.domain_names?.split(',').includes(hostname)) return res.sendStatus(404).end()
  }

  return res.send({
    'X-Hasura-User-Id': user ? user.id.toString() : 'codegen',
    'X-Hasura-Role': 'api_user',
    'X-Hasura-Is-Owner': 'true',
    'Cache-Control': 'max-age=600',
  })
})

app.listen(3000, '0.0.0.0', () => log.info('Server running at http://0.0.0.0:3000/'))
