import { NetworkType } from '@animeswap.org/v1-sdk'

export enum SupportedChainId {
  APTOS = 34,
  APTOS_TESTNET = 2,
  APTOS_DEVNET = 1,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.APTOS]: 'aptos_devnet',
  [SupportedChainId.APTOS_TESTNET]: 'aptos_testnet',
  [SupportedChainId.APTOS_DEVNET]: 'aptos',
}

export const CHAIN_IDS_TO_SDK_NETWORK = {
  [SupportedChainId.APTOS]: NetworkType.Devnet,
  [SupportedChainId.APTOS_TESTNET]: NetworkType.Testnet,
  [SupportedChainId.APTOS_DEVNET]: NetworkType.Mainnet,
}

export function isSupportedChain(chainId: number | undefined): chainId is SupportedChainId {
  return !!chainId && !!SupportedChainId[chainId]
}
