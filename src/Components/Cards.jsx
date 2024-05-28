import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="mt-4">
      <div className="row">
        {data.map((row, index) => (
          <div className="col-md-4 col-12 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Rank: {row.Rank}</h5>
                <p className="card-text">
                  <strong>Name:</strong> {row.Name}
                </p>
                <p className="card-text">
                  <strong>Calmar Ratio:</strong> {row.CalmarRatio}
                </p>
                <p className="card-text">
                  <strong>Overall Profit:</strong> {row.OverallProfit}
                </p>
                <p className="card-text">
                  <strong>Avg. Daily Profit:</strong> {row.AvgDailyProfit}
                </p>
                <p className="card-text">
                  <strong>Win % (Day):</strong> {row.WinPercent}
                </p>
                <p className="card-text">
                  <strong>Price (Rs):</strong> {row.Price}
                </p>
                <button className="btn btn-primary">{row.Action}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
