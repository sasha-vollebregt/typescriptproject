import axios from 'axios';
import { axiosMiddleware } from '../middleware/axios.middleware.js';
import { BinancePingResponse, CandlestickData, BinanceTicker, BinanceSymbol } from '../interfaces/binance.interface.js';

/**
 * A service class for interacting with the Binance API.
 */
class BinanceService {
  private readonly baseUrl: string = 'https://api.binance.com/api/v3';

  /**
   * Pings the Binance API to check if it's alive.
   * @returns A Promise that resolves to a BinancePingResponse object.
   */
  async call(): Promise<BinancePingResponse> {
    const response: BinancePingResponse = await axiosMiddleware<BinancePingResponse>(axios.get(`${this.baseUrl}/ping`));
    return response;
  }
 
  /**
   * Retrieves 24-hour ticker data for a specific symbol from the Binance API.
   * @param symbol - The symbol to retrieve ticker data for.
   * @returns A Promise that resolves to an array of BinanceTicker objects.
   */
  async getTicker24hData(symbol: string): Promise<BinanceTicker[]> {
    const response: BinanceTicker[] = await axiosMiddleware<BinanceTicker[]>(axios.get(`${this.baseUrl}/ticker/24hr`, {
      params: {
        symbol: symbol,
      },
    }));
    return response;
  }

    /**
   * Retrieves candlestick data for a specific symbol and interval from the Binance API.
   * @param symbol - The symbol to retrieve candlestick data for.
   * @param interval - The interval to retrieve candlestick data for (e.g. '1m', '1h', '1d', etc.).
   * @returns A Promise that resolves to an array of CandlestickData objects.
   */
  async getCandlestickData(symbol: BinanceSymbol, interval: string): Promise<CandlestickData[]> {
    const response: CandlestickData[] = await axiosMiddleware<CandlestickData[]>(axios.get(`${this.baseUrl}/klines`, {
      params: {
        symbol: symbol,
        interval: interval,
      },
    }));
    return response;
  }
}

export default BinanceService;
