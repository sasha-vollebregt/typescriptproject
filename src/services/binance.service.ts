import axios from 'axios';
import { axiosMiddleware } from '../middleware/axios.middleware.js';
import { IBinancePingResponse, ICandlestickDataResponse, IBinanceTickerResponse, EBinanceSymbol } from '../interfaces/binance.interface.js';
import { BaseUrls } from '../interfaces/urls.interface.js';
import { logger } from '../utils/logger.utils.js';

/**
 * A service class for interacting with the Binance API.
 */
class BinanceService {
  private readonly baseUrl: BaseUrls = BaseUrls.binanceV3;

  /**
   * Pings the Binance API to check if it's alive.
   * @returns A Promise that resolves to a BinancePingResponse object.
   */
  async call(): Promise<IBinancePingResponse> {
    logger.info(`About to use binance service to get a ping`)
    return await axiosMiddleware<IBinancePingResponse>(axios.get(`${this.baseUrl}/ping`));
  }

    /**
   * Retrieves candlestick data for a specific symbol and interval from the Binance API.
   * @param symbol - The symbol to retrieve candlestick data for.
   * @param interval - The interval to retrieve candlestick data for (e.g. '1m', '1h', '1d', etc.).
   * @returns A Promise that resolves to an array of CandlestickData objects.
   */
  async getCandlestickData(symbol: EBinanceSymbol, interval: string): Promise<ICandlestickDataResponse[]> {
    logger.info(`About to use binance service to get candlestick data with symbol ${symbol} and interval ${interval}`);
    return await axiosMiddleware<ICandlestickDataResponse[]>(axios.get(`${this.baseUrl}/klines`, {
      params: {
        symbol: symbol,
        interval: interval,
      },
    }));
  }

    /**
   * Retrieves 24-hour ticker data for a specific symbol from the Binance API.
   * @param symbol - The symbol to retrieve ticker data for.
   * @returns A Promise that resolves to an array of BinanceTicker objects.
   */
    async getTicker24hData(symbol: EBinanceSymbol): Promise<IBinanceTickerResponse[]> {
      logger.info(`About to use binance service to get ticker 24h data with following symbol ${symbol}`);
      return await axiosMiddleware<IBinanceTickerResponse[]>(axios.get(`${this.baseUrl}/ticker/24hr`, {
        params: {
          symbol
        },
      }));
    }
  
}

export default BinanceService;
