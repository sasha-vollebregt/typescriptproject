
import BinanceService from '../services/binance.service.js';
import { BinancePingResponse, CandlestickData, BinanceTicker, BinanceSymbol } from '../interfaces/binance.interface.js';
import { logger } from '../utils/logger.utils.js';

class TradingController {
  /**
   * Calls the Binance API ping endpoint to test connectivity
   * @returns a Promise that resolves to a BinancePingResponse object
   */
    public async pingBinance(): Promise<BinancePingResponse> {
      try {
      logger.info('Ping Binance API');
      const binanceService = new BinanceService();
      return await binanceService.call();
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
  public async candleStickData(symbol: BinanceSymbol, interval: string): Promise<CandlestickData[]> {
    try {
      logger.info(`Getting candlestick data for ${symbol} and interval ${interval}`);
      const binanceService = new BinanceService();
      return await binanceService.getCandlestickData(symbol, interval);
    } catch (error) {
      logger.error(`Error pinging Binance API: ${error}`);
      throw new Error();
    }
  }

  /**
   * Calls the Binance API 24 hour ticker endpoint to test connectivity
   * @returns a Promise that resolves to a BinanceTickerRepsonse object
   */

  public async Ticker24hData(): Promise<BinanceTicker[]> {
    try {
      logger.info(`Getting Ticker24hData data for`);
      const binanceService = new BinanceService();
      return await binanceService.getTicker24hData('ETHBTC');
    } catch (error) {
      logger.error(`Error pinging Binance API: ${error}`);
      throw new Error();
    }
  }

}

export default TradingController;