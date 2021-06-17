const express = require('express')
require('dotenv').config()
import { hasura } from '../../../modules/hasura-client'

const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = Number(process.env.PORT || 3000)

const app = express()

app.get('/', async (req: any, res: any) => {

    const apiKey: string = req.headers['x-hasura-chaingraph-api-key'] || ''
  
    const result = await hasura.get_api_user_by_key({ api_key: apiKey })
    console.log('result', result)
    if ((result?.data?.api_users.length) === 0){
      throw new Error('Invalid API Key')
    }
  
    res.send({
      "X-Hasura-User-Id": result?.data?.api_users[0].account,
      "X-Hasura-Role": "tester", // TODO: add user role
      "X-Hasura-Is-Owner": "true"
    })

})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
