export interface ConnectionsConfig {
  postgres: {
    host: string
    port: number
    user: string
    password: string
    database: string
  }
  redis: {
    host: string
    port: number
  }
}

export interface ServerConfig {
  provider_name: string
  provider_url: string

  server_addr: string
  server_name: string
  server_port: number

  cache_life: number
  trust_proxy: boolean

  rate_limit: {
    interval: number
    requests: number
  }

  socket_limit: {
    connections_per_ip: number
    subscriptions_per_connection: number
  }

  ip_whitelist: string[]
  slow_query_threshold: number
}

export interface ReadersConfig {
  eosio: EosioReaderConfig[]
}
