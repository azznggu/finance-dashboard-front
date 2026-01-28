import axios from 'axios';
import type { HistoricalData, Period } from '../types';

const LOCAL_API_BASE_URL = 'http://localhost:3001/api';

/**
 * 개발 환경: 로컬호스트 고정
 * 프로덕션: VITE_API_URL 필수 (예: https://your-domain.com/api)
 */
const API_BASE_URL = import.meta.env.DEV
  ? (
      import.meta.env.VITE_USE_REMOTE_API === 'true' && import.meta.env.VITE_API_URL
        ? (import.meta.env.VITE_API_URL as string)
        : LOCAL_API_BASE_URL
    )
  : (import.meta.env.VITE_API_URL as string | undefined);

if (import.meta.env.PROD && !API_BASE_URL) {
  throw new Error('VITE_API_URL 환경변수가 설정되어 있지 않습니다. (예: https://your-domain.com/api)');
}

export const api = {
  // 환율
  getExchangeRate: async (pair: string, period: Period, signal?: AbortSignal): Promise<HistoricalData> => {
    const response = await axios.get(`${API_BASE_URL}/exchange-rate`, {
      params: { pair, period },
      signal
    });
    return response.data;
  },

  // 금시세
  getGoldPrice: async (period: Period, signal?: AbortSignal): Promise<HistoricalData> => {
    const response = await axios.get(`${API_BASE_URL}/gold`, {
      params: { period },
      signal
    });
    return response.data;
  },

  // 가상화폐
  getCryptoPrice: async (symbol: string, period: Period, signal?: AbortSignal): Promise<HistoricalData> => {
    const response = await axios.get(`${API_BASE_URL}/crypto/${symbol}`, {
      params: { period },
      signal
    });
    return response.data;
  },

  // S&P 500
  getSP500: async (period: Period, signal?: AbortSignal): Promise<HistoricalData> => {
    const response = await axios.get(`${API_BASE_URL}/sp500`, {
      params: { period },
      signal
    });
    return response.data;
  },

  // 전체 데이터
  getAllData: async (period: Period, signal?: AbortSignal) => {
    const response = await axios.get(`${API_BASE_URL}/all`, {
      params: { period },
      signal
    });
    return response.data;
  }
};
