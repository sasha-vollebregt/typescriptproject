export interface IBinancePingResponse {
  data: object;
}

export enum EBinanceSymbol {
  BTCUSDT = 'BTCUSDT',
  ETHUSDT = 'ETHUSDT',
  // add more symbols here as needed
}

export enum EBinanceInterval {
  '1m' = '1m',
  '5m' = '5m'
}

export enum ETradeType {
  price = 'price',
  bid = 'bid',
  ask = 'ask',
  volume = 'volume',
  all = 'all'
}

export interface ITradingInput {
  symbol?:  keyof typeof EBinanceSymbol;
  symbols?: keyof typeof  EBinanceSymbol[]; 
  interval?: keyof typeof EBinanceInterval;
  startTime?: number;
  endTime?: number;
  limit?: number;
  type?: keyof typeof ETradeType;
  fromId?: number;
}

export interface ITradingBaseInput extends ITradingInput {
  symbol:  keyof typeof EBinanceSymbol;
}

export interface ICandlestickInput extends ITradingInput {
  symbol:  keyof typeof EBinanceSymbol;
  interval: keyof typeof EBinanceInterval;
}

export interface ICandlestickDataResponse {
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  closeTime: number;
  quoteAssetVolume: string;
  trades: number;
  takerBuyBaseAssetVolume: string;
  takerBuyQuoteAssetVolume: string;
  ignored: string;
}

export interface IBinanceTickerResponse {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}
