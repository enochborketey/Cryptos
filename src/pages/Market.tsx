import React, { useEffect, useRef, useState } from 'react';
import { createChart, UTCTimestamp } from 'lightweight-charts';
import { Link } from 'react-router-dom';

type Timeframe = '5m' | '15m' | '30m' | '1h' | '4h' | '1d' | '1w' | '1m';

function generateCandlestickData(count: number, timeframe: Timeframe) {
  const data = [];
  let baseValue = 50;
  let currentDate = new Date(2023, 0, 1).getTime();
  const intervalMs = getIntervalMs(timeframe);

  for (let i = 0; i < count; i++) {
    const open = baseValue + Math.random() * 10 - 5;
    const close = open + Math.random() * 10 - 5;
    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;

    data.push({
      time: (currentDate / 1000) as UTCTimestamp,
      open,
      high,
      low,
      close
    });

    baseValue = close;
    currentDate += intervalMs;
  }

  return data;
}

function getIntervalMs(timeframe: Timeframe): number {
  switch (timeframe) {
    case '5m': return 5 * 60 * 1000;
    case '15m': return 15 * 60 * 1000;
    case '30m': return 30 * 60 * 1000;
    case '1h': return 60 * 60 * 1000;
    case '4h': return 4 * 60 * 60 * 1000;
    case '1d': return 24 * 60 * 60 * 1000;
    case '1w': return 7 * 24 * 60 * 60 * 1000;
    case '1m': return 30 * 24 * 60 * 60 * 1000;
  }
}

function Market() {
  const [timeframe, setTimeframe] = useState<Timeframe>('1d');

  return (
    <div className='bg-gray-800 min-h-screen flex flex-col'>
      <Navbar />
      <div className="p-4 flex flex-col items-start">
        <div className="flex space-x-4 mb-4 w-full justify-between">
          <div className="flex space-x-4">
            <select 
              value={timeframe} 
              onChange={(e) => setTimeframe(e.target.value as Timeframe)}
              className="p-2 bg-gray-700 text-white rounded"
            >
              <option value="5m">5 minutes</option>
              <option value="15m">15 minutes</option>
              <option value="30m">30 minutes</option>
              <option value="1h">1 hour</option>
              <option value="4h">4 hours</option>
              <option value="1d">1 day</option>
              <option value="1w">1 week</option>
              <option value="1m">1 month</option>
            </select>

            <select 
              value={timeframe} 
              onChange={(e) => setTimeframe(e.target.value as Timeframe)}
              className="p-2 bg-gray-700 text-white rounded"
            >
              <option value="5m">BTC/USDT</option>
              <option value="15m">ETH/USDT</option>
              <option value="30m">SOL/USDT</option>
              <option value="1h">TON/USDT</option>
              <option value="4h">XRP/USDT</option>
              <option value="1d">NOT/USDT</option>
              <option value="1w">ADA/USDT</option>
              <option value="1m">SHIB/USDT</option>
            </select>
          </div>
        </div>
        <div className="grid pb-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <Trade timeframe={timeframe} />
          <TradeMore timeframe={timeframe} />
          <TradeTrade timeframe={timeframe} />
          <TradeTrade timeframe={timeframe} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <Trade timeframe={timeframe} />
          <TradeMore timeframe={timeframe} />
          <TradeTrade timeframe={timeframe} />
          <TradeTrade timeframe={timeframe} />
        </div>
      </div>
    </div>
  );
}

function Trade({ timeframe }: { timeframe: Timeframe }) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: 300,
        height: 200,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });

      const data = generateCandlestickData(1000, timeframe);
      candlestickSeries.setData(data);

      chart.timeScale().fitContent();

      chartRef.current = chart;
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [timeframe]);

  return (
    <div className='bg-gray-700 p-4 rounded'>
      <div ref={chartContainerRef} className="w-full" />
    </div>
  );
}

function TradeMore({ timeframe }: { timeframe: Timeframe }) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: 300,
        height: 200,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });

      const data = generateCandlestickData(1000, timeframe);
      candlestickSeries.setData(data);

      chart.timeScale().fitContent();

      chartRef.current = chart;
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [timeframe]);

  return (
    <div className='bg-gray-700 p-4 rounded'>
      <div ref={chartContainerRef} className="w-full" />
    </div>
  );
}

function TradeTrade({ timeframe }: { timeframe: Timeframe }) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: 300,
        height: 200,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });

      const data = generateCandlestickData(1000, timeframe);
      candlestickSeries.setData(data);

      chart.timeScale().fitContent();

      chartRef.current = chart;
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [timeframe]);

  return (
    <div className='bg-gray-700 p-4 rounded'>
      <div ref={chartContainerRef} className="w-full" />
    </div>
  );
}

export function Navbar() {
  return (
    <ul className="flex space-x-6 px-4 py-2 bg-gray-800 rounded-lg">
      <li>
        <Link to={'/Market'}>
          <button className="text-gray-300 hover:text-blue-400">
            Market
          </button>
        </Link>
      </li>
      <li>
        <Link to={'/Buy'}>
          <button className="text-gray-300 hover:text-blue-400">
            Buy & Sell
          </button>
        </Link>
      </li>
      <li>
        <a className="text-gray-300 hover:text-blue-400" href="#">
          Withdraw
        </a>
      </li>
      <li>
        <a className="text-gray-300 hover:text-blue-400" href="#">
          Swap
        </a>
      </li>
    
    </ul>
  );
}

export default Market;