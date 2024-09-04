import { FC } from "react";

interface StatisticsProps {
  source: string;
  value: string;
}

const Statistics: FC<StatisticsProps> = ({ source, value }) => {
  return (
    <div>
      <div className="stat place-items-center">
        <div className="stat-title">{source}</div>
        <div className="stat-value text-secondary">{value}</div>
      </div>
    </div>
  );
};

export default Statistics;
