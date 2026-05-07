import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  widgetType: 'chart' | 'technical' | 'financials' | 'news' | 'profile' | 'ideas';
  symbol: string;
  exchange: string;
  height?: string | number;
  width?: string | number;
  theme?: 'light' | 'dark';
  interval?: string;
}

const TradingViewWidget = memo(({ 
  widgetType, 
  symbol, 
  exchange, 
  height = '100%', 
  width = '100%',
  theme = 'light',
  interval = 'D'
}: TradingViewWidgetProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const currentContainer = container.current;
    currentContainer.innerHTML = ''; // Clear previous widget

    let scriptSrc = "";
    let config: any = {};
    const fullSymbol = `${exchange}:${symbol}`;
    const widgetId = `tv_widget_${widgetType}_${Math.random().toString(36).substring(2, 9)}`;

    switch (widgetType) {
      case 'chart':
        scriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        config = {
          "autosize": true,
          "symbol": fullSymbol,
          "interval": interval,
          "timezone": "Etc/UTC",
          "theme": theme,
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "calendar": false,
          "studies": [
            "Volume@tv-basicstudies",
            "MACD@tv-basicstudies",
            "RSI@tv-basicstudies"
          ],
          "container_id": widgetId
        };
        break;
      case 'technical':
        scriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
        config = {
          "interval": "1m",
          "width": "100%",
          "isTransparent": false,
          "height": "100%",
          "symbol": fullSymbol,
          "showIntervalTabs": true,
          "displayMode": "single",
          "locale": "en",
          "colorTheme": theme
        };
        break;
      case 'financials':
        scriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
        config = {
          "isTransparent": false,
          "largeChartUrl": "",
          "displayMode": "regular",
          "width": "100%",
          "height": "100%",
          "colorTheme": theme,
          "symbol": fullSymbol,
          "locale": "en"
        };
        break;
      case 'news':
        scriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
        config = {
          "feedMode": "symbol",
          "symbol": fullSymbol,
          "colorTheme": theme,
          "isTransparent": false,
          "displayMode": "regular",
          "width": "100%",
          "height": "100%",
          "locale": "en"
        };
        break;
      case 'profile':
        scriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
        config = {
          "width": "100%",
          "height": "100%",
          "colorTheme": theme,
          "isTransparent": false,
          "symbol": fullSymbol,
          "locale": "en"
        };
        break;
      case 'ideas':
        scriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
        config = {
          "symbol": fullSymbol,
          "width": "100%",
          "locale": "en",
          "colorTheme": theme,
          "isTransparent": false
        };
        break;
    }

    if (!scriptSrc) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = scriptSrc;
    script.innerHTML = JSON.stringify(config);
    
    // Create the widget container div
    const widgetDiv = document.createElement('div');
    widgetDiv.id = widgetId;
    widgetDiv.className = 'tradingview-widget-container__widget';
    widgetDiv.style.height = '100%';
    widgetDiv.style.width = '100%';
    
    currentContainer.appendChild(widgetDiv);
    currentContainer.appendChild(script);

    return () => {
      // Clean up on unmount
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [widgetType, symbol, exchange, theme, interval]);

  return (
    <div 
      ref={container} 
      className="tradingview-widget-container" 
      style={{ height, width }}
    />
  );
});

TradingViewWidget.displayName = 'TradingViewWidget';

export default TradingViewWidget;
