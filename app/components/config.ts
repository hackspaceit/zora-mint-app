import { http, createConfig } from 'wagmi'
import { base, celo } from 'wagmi/chains'

export const config = createConfig({
  chains: [base, celo],
  transports: {
    [base.id]: http(),
    [celo.id]: http(),
  },
})