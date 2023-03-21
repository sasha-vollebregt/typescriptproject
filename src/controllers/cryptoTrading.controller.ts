import BinanceService from '../services/binance.service.js';
import { IBinancePingResponse, ICandlestickDataResponse, IBinanceTickerResponse, EBinanceSymbol } from '../interfaces/binance.interface.js';
import { logger } from '../utils/logger.utils.js';

class TradingController {
  private _binanceService: BinanceService;

  constructor() {
    this._binanceService = new BinanceService;
  }
  /**
   * Calls the Binance API ping endpoint to test connectivity
   * @returns a Promise that resolves to a BinancePingResponse object
   */
    public async pingBinance(): Promise<IBinancePingResponse> {
      try {
      logger.info('The cryptoTrading controller is about to Ping Binance API');
      return await this._binanceService.call();
    } catch (error) {
      logger.error(`Error pinging Binance API: ${error}`);
      throw new Error()
    }
  }

  /**
   * Calls the Binance API candlestick endpoint to get candlestick data for a symbol and interval
   * @param symbol the symbol to get candlestick data for (e.g. 'BTCUSDT')
   * @param interval the interval for the candlestick data (e.g. '1h', '4h', '1d')
   * @returns a Promise that resolves to an array of CandlestickData objects
   */
  public async candleStickData(symbol: EBinanceSymbol, interval: string): Promise<ICandlestickDataResponse[]> {
    try {
      logger.info(`The cryptoTrading controller is getting candlestick data for ${symbol} and interval ${interval}`);
      return await this._binanceService.getCandlestickData(symbol, interval);
    } catch (error) {
      logger.error(`Error pinging Binance API: ${error}`);
      throw new Error();
    }
  }

  /**
   * Calls the Binance API 24 hour ticker endpoint to test connectivity
   * @returns a Promise that resolves to a BinanceTickerRepsonse object
   */

  public async Ticker24hData(symbol: EBinanceSymbol): Promise<IBinanceTickerResponse[]> {
    try {
      logger.info(`The cryptoTrading controller getting Ticker24hData data with symbol ${symbol}`);
      return await this._binanceService.getTicker24hData(symbol);
    } catch (error) {
      logger.error(`Error pinging Binance API: ${error}`);
      throw new Error();
    }
  }

}

export default TradingController;