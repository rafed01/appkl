import React from 'react';
import './Bids.css'

const Bids = () => {
  const bids = [
    { id: 1, itemName: 'Item 1', currentBid: 50 },
    { id: 2, itemName: 'Item 2', currentBid: 75 },
    { id: 3, itemName: 'Item 3', currentBid: 100 },
  ];

  return (
    <div className="row">
    <div className="col-3">
      <div className="filter-card mb-3">
        <h3 className="filter-title">Shop By Categories</h3>
        <div>
          <ul className="ps-0">
            <li>Cars</li>
            <li>Divers</li>
            <li>Houses</li>
            <li>Electro</li>
          </ul>
        </div>
        </div>
      </div>
    <div className="bids-page">
      <h1>Bids</h1>
      <div className="bids-list">
        {bids.map((bid) => (
          <div key={bid.id} className="bid-item">
            <h2>{bid.itemName}</h2>
            <p>Current Bid: ${bid.currentBid}</p>
            {}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Bids
