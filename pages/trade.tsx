import Trade from "../components/Trade";

const trades = [
  {
    title: "SCB1",
    description: "bank group stock",
  },
  {
    title: "SCB2",
    description: "bank group stock",
  },
  {
    title: "SCB3",
    description: "bank group stock",
  },
  {
    title: "SCB4",
    description: "bank group stock",
  },
];

type ITrade = {
  title: string;
  description: string;
};

export default () => {
  const renderTrades = ({ title, description }: ITrade) => (
    <Trade title={title} description={description} />
  );

  return trades.map(renderTrades);
};
