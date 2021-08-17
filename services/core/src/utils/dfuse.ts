import { createDfuseClient } from '@dfuse/client'

// Here what you need to connect to the dfuse Community Edition hosted by EOS Nation
export const dFuseClient = createDfuseClient({
  network: 'eos.dfuse.eosnation.io',
  authentication: false,
})
