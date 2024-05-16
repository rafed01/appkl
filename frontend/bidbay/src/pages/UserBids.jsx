import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import api from "../api";
import useCurrentUser from "../hooks/UseCurrentUser";
import "../styles/UserBids.css"

const UserBids = () => {
  const currentUser = useCurrentUser(); // Using custom hook to fetch current user
  const [userBids, setUserBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bidsMap, setBidsMap] = useState({});

  useEffect(() => {
    if (currentUser) {
      fetchUserBids(currentUser.id);
    }
  }, [currentUser]);

  useEffect(() => {
    fetchAllBids();
  }, []);

  const fetchAllBids = async () => {
    try {
      const response = await api.get("/api/bids");
      const bids = response.data;
      const bidsMap = {};
      bids.forEach((bid) => {
        bidsMap[bid.id] = bid;
      });
      setBidsMap(bidsMap);
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  };

  const fetchUserBids = async (userId) => {
    try {
      const response = await api.get(`/api/user-bids/?user=${userId}`);
      setUserBids(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user bids:", error);
    }
  };

  return (
    <div className="container">
      <h2>Your Bids</h2>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : userBids.length === 0 ? (
        <p>You are not participating in any bids at the moment.</p>
      ) : (
        <div className="user-bids-container">
          {userBids.map((userBid) => (
            <div key={userBid.id} className="user-bid-card">
              <img src={bidsMap[userBid.bid]?.bid_image1} alt="Bid Image" className="bid-image" />
              <div className="bid-details">
                <p className="bid-name">Bid Name: {bidsMap[userBid.bid]?.bid_name}</p>
                <p className="bid-amount">Bid Amount: ${userBid.amount}</p>
                <p className="check-auction-link"><Link to={`/bids/${userBid.bid}`}>Check Auction</Link></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBids;
