import { Router, Request, Response, NextFunction } from 'express';
import TradingController from '../controllers/cryptoTrading.controller.js';
import validateCandlestickRequest from '../middleware/validateSymbolAndInterval.middleware.js'; 
import { logger } from '../utils/logger.utils.js';

const router = Router();
const tradingController = new TradingController();

// GET /trading-data route
router.get('/ping', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Call the getTradingData function of the TradingController to get trading data
    const tradingData = await tradingController.pingBinance();
    // Send the trading data as the response
    res.json(tradingData);
  } catch (err) {
    // If an error occurred, send an error response
    logger.error(`Crypto routers error at ping ${err}`);
    next(err)
  }
});

// GET /trading-data route
router.post('/candlestick', validateCandlestickRequest, async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Call the getTradingData function of the TradingController to get trading data
    const { symbol, interval } = req.body; // extract symbol and interval from request body
    logger.info(`The router is getting candlestick data: ${symbol} and ${interval}`)
    const tradingData = await tradingController.candleStickData(symbol, interval);
    // Send the trading data as the response
    res.json(tradingData);
  } catch (err) {
    // If an error occurred, send an error response
    logger.error(`Crypto routers error at candlestick ${err}`);
    next(err)
  }
});

// GET /trading-data route
router.get('/ticker-24h', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Call the getTradingData function of the TradingController to get trading data
    const tradingData = await tradingController.Ticker24hData();
    // Send the trading data as the response
    res.json(tradingData);
  } catch (err) {
    // If an error occurred, send an error response
    logger.error(`Crypto routers error at ping ${err}`);
    next(err)
  }
});

export default router;