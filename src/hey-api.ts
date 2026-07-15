import type { CreateClientConfig } from './generated/client/index.js'

/**
 * Config padrão do client gerado (Hey API).
 * Credenciais são aplicadas em runtime pela facade `AureEx`.
 */
export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: config?.baseUrl ?? 'https://api.aure-ex.com/v1'
})
