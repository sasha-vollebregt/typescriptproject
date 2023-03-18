import axios, { AxiosError, AxiosResponse } from 'axios';
import { logger } from '../utils/logger.utils.js'

const handleAxiosError = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    // handle specific Axios errors (e.g. network error, timeout, etc.)
    logger.error('Axios error:', error);
    logger.error('Axios error:', error.message);
  } else {
    // handle non-Axios errors (e.g. JSON parsing error, etc.)
    logger.error('Non-Axios error:', error);
  }

  // Return a rejected Promise to propagate the error to the caller
  return Promise.reject(error);
};

export const axiosMiddleware = async <T>(axiosPromise: Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    logger.info(`Axios Middleware about to handle the axiosPromise`)
    const response = await axiosPromise;
    logger.info(`A response for the promise has been created`)
    return response.data;
  } catch (error) {
    return handleAxiosError(error as AxiosError);
  }
};
