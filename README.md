# @aure-ex/sdk

SDK oficial da API AureEX para Node.js / TypeScript.

## Instalação

```bash
npm i @aure-ex/sdk
```

## Uso

```ts
import { AureEx } from '@aure-ex/sdk'

const aureEx = new AureEx({
  apiKey: process.env.AUREEX_API_KEY!,
  apiSecret: process.env.AUREEX_API_SECRET!
})

await aureEx.deposits.create({
  method: 'usdt',
  reference: 'order-1',
  amount: 10000
})

await aureEx.webhooks.list()
await aureEx.company.balance()
await aureEx.conversions.quote({ from: 'USDT', to: 'BRL', amount: 100 })
```

## Mapa de métodos

| SDK | HTTP |
| --- | --- |
| `aureEx.deposits.*` | `/v1/deposits` |
| `aureEx.withdrawals.*` | `/v1/withdrawals` |
| `aureEx.webhooks.*` | `/v1/webhooks` |
| `aureEx.company.get` / `balance` | `/v1/company`, `/v1/company/balance` |
| `aureEx.conversions.*` / `quote` | `/v1/conversions`, `/v1/conversions/quote` |

Docs: https://api.aure-ex.com/docs/sdks  
OpenAPI: https://api.aure-ex.com/openapi.yaml
