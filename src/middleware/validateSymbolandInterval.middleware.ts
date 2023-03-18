import { Request, Response, NextFunction } from 'express';
import { BinanceSymbol, BinanceInterval, CandlestickRequestBody } from '../interfaces/binance.interface.js';

const validateCandlestickRequest = (req: Request, res: Response, next: NextFunction) => {
  const { symbol, interval }: CandlestickRequestBody = req.body;

  if (!BinanceSymbol[symbol]) {
    return res.status(400).json({ message: `Invalid symbol: ${symbol}` });
  }

  if (!BinanceInterval[interval]) {
    return res.status(400).json({ message: `Invalid interval: ${interval}` });
  }

  next();
};
export default validateCandlestickRequest;