import { Request, Response, NextFunction } from 'express';
import { EBinanceSymbol, EBinanceInterval, ICandlestickInput } from '../../interfaces/binance.interface.js';

const validateCandlestickRequest = (req: Request, res: Response, next: NextFunction) => {
  const { symbol, interval }: ICandlestickInput = req.body;

  if (!EBinanceSymbol[symbol]) {
    return res.status(400).json({ message: `Invalid symbol: ${symbol}` });
  }

  if (!EBinanceInterval[interval]) {
    return res.status(400).json({ message: `Invalid interval: ${interval}` });
  }

  next();
};
export default validateCandlestickRequest;