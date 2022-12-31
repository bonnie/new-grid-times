import React from "react";
import styled from "styled-components/macro";

// HACK: Normally, we'd receive a prop like `priceData` and
// draw the graph based on that data. Because our graphs are
// pre-generated SVGs, though, we're cheating and mapping each
// graph to a specific stock.
const STOCK_GRAPHS_BY_TICKER_SYMBOL = {
  AAPL: "/images/stock-graph-up-1.svg",
  AMC: "/images/stock-graph-up-2.svg",
  ENB: "/images/stock-graph-down-1.svg",
  GOOG: "/images/stock-graph-up-3.svg",
  AMZN: "/images/stock-graph-down-2.svg",
  MSFT: "/images/stock-graph-down-3.svg",
};

const MarketCard = ({ tickerSymbol, exchangeName, percentChange }) => {
  const graphSrc = STOCK_GRAPHS_BY_TICKER_SYMBOL[tickerSymbol];
  const percentageSymbol = percentChange >= 0 ? "+" : "";
  const percentageColor =
    percentChange >= 0
      ? (props) => props.theme.colors.secondary
      : (props) => props.theme.colors.urgent;

  return (
    <Wrapper>
      <Row>
        <TickerSymbol>{tickerSymbol}</TickerSymbol>
        <GraphWrapper>
          <Graph alt="" src={graphSrc} />
        </GraphWrapper>
      </Row>
      <Row>
        <Exchange>{exchangeName}</Exchange>
        <Percentage style={{ "--color": percentageColor }}>
          {percentageSymbol}
          {percentChange}%
        </Percentage>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: block;
  /* Optical alignment */
  padding: 6px 12px 8px;
  color: ${(props) => props.theme.colors.gray[900]};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 2px 4px 12px hsl(0deg 0% 0% / 0.1);
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TickerSymbol = styled.p`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.weights.bold};
  font-family: ${(props) => props.theme.families["sans-serif"]};
`;

const GraphWrapper = styled.div`
  min-width: 0;
`;

const Graph = styled.img`
  display: block;
  width: 100%;
  height: 20px;
`;

const Exchange = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[700]};
  font-family: ${(props) => props.theme.families["sans-serif"]};
`;

const Percentage = styled.span`
  font-size: 0.875rem;
  font-weight: ${(props) => props.theme.weights.bold};
  font-family: ${(props) => props.theme.families["sans-serif"]};
  color: var(--color);
`;

export default MarketCard;
