export interface BinancePingResponse {
  data: string;
}

export enum BinanceSymbol {
  BTCUSDT = 'BTCUSDT',
  ETHUSDT = 'ETHUSDT',
  // add more symbols here as needed
}

export enum BinanceInterval {
  '1m' = '1m',
  '5m' = '5m'
}

export interface CandlestickRequestBody {
  symbol: keyof typeof BinanceSymbol;
  interval: keyof typeof BinanceInterval;
}

export interface CandlestickData {
  openTime: number;
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

export interface BinanceTicker {
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
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}
