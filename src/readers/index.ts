import readersConfig from '../config/readers.config'
import { startEosioReader } from './eosio-reader'

export const startReaders = () => {
  readersConfig.eosio.forEach(startEosioReader)
}
