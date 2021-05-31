import * as http from 'http'
const express = require('express')
import { hasura } from '../../../modules/hasura-client'

const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = Number(process.env.PORT || 3000)

const app = express()

app.post('/', async (req: any, res: any) => {
  console.log('🥎', req.body)

  // TODO: check API key
  // 1. get API key
  const api_key: string = req.headers['X-ChainGraph-API-Key'] || ''

  // 2. check key is valid against database using Hasura itself
  const result = await hasura.get_api_user_by_key({ api_key })
  if (!result.data) throw new Error('Invalid API Key')

  // next phase: restrict api key to domain list

  // TODO: create hasura role api_user with READ-ONLY access to everything except api_users table
  res.send({
    'X-Hasura-Role': 'api_user',
  })
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
