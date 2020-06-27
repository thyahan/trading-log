type IProps = {
  title: string;
  description: string;
};

const TradeComponent: React.FC<IProps> = ({ title, description }) => {
  return (
    <>
      <h2>{title}</h2>
      <h4>{description}</h4>
      <hr />
    </>
  );
};

export default TradeComponent;
