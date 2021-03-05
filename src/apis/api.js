import { get } from './axios'

export const getProposal = async (params) => get('http://1.15.101.110:3000/nps/getProposal', params)

export const getApys = async () => get('/mining_pool_apys.json')

export const getPnutLpExchangeInfo = async () => get('https://api.just.network/swap/scan/statusinfo?exchangeAddress=TPt2a3GtKMY5972mWa2aL3KKVY6ScWX2G2')

export const getTspLpExchangeInfo = async () => get('https://api.just.network/swap/scan/statusinfo?exchangeAddress=TBpTbddofiBrE1AfhQbwU2BhsrBUM2Lnir')