import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "../styles/BidDetails.css"; // Adjust the path if necessary
import useCurrentUser from "../hooks/UseCurrentUser";
import { useNavigate } from "react-router-dom";

const BidDetails = () => {
  const navigate = useNavigate();
  const currentUser = useCurrentUser(); // Using custom hook to fetch current user
  const { id } = useParams();
  const [bid, setBid] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!currentUser) {
    navigate("/login", { state: { from: location } })
  }

  useEffect(() => {
    fetchBidDetails();
  }, []);

  const fetchBidDetails = async () => {
    try {
      const response = await api.get(`/api/bids/${id}`);
      const bidData = response.data;
      setBid(bidData);
      fetchCategoryName(bidData.bid_category);
      console.log(bidData);
    } catch (error) {
      console.error("Error fetching bid details:", error);
    }
  };

  const fetchCategoryName = async (categoryId) => {
    try {
      const response = await api.get(`/api/categories/${categoryId}`);
      setCategoryName(response.data.name);
    } catch (error) {
      console.error("Error fetching category name:", error);
    }
  };

  const handleBid = async () => {
    try {
      // Check if the current user object exists
      if (!currentUser) {
        console.error('User information not found.');
        return;
      }

      // Extract user ID from the currentUser object
      const userId = currentUser.id;
      
      // Check if userId is valid
      if (!userId) {
        console.error('User ID not found.');
        return;
      }

      const response = await api.post("/api/user-bids/", {
        bid: bid.id,
        amount: bidAmount,
        user: userId,
      });
      alert("Bid placed successfully");
      setBidAmount(""); // Reset the bid amount
      setErrorMessage(""); // Clear any error messages
      fetchBidDetails(); // Refresh bid details to update highest bid
    } catch (error) {
      console.error("Error placing bid:", error);
      setErrorMessage("Failed to place bid. Please try again.");
    }
  };

  return (
    <div className="container">
      {bid ? (
        <div className="bid-details">
          <h2>{bid.bid_name}</h2>
          <div className="image-carousel">
            {[
              bid.bid_image1,
              bid.bid_image2,
              bid.bid_image3,
              bid.bid_image4,
              bid.bid_image5,
            ].map(
              (imageUrl, index) =>
                imageUrl && (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="carousel-image"
                  />
                )
            )}
          </div>
          <p>
            <strong>Description:</strong> {bid.bid_description}
          </p>
          <p>
            <strong>Starting Price:</strong> ${bid.starting_price}
          </p>
          <p>
            <strong>Current Highest Bid:</strong> $
            {bid.highest_bid || "No bids yet"}
          </p>
          <p>
            <strong>Highest Bidder:</strong>{" "}
            {bid.highest_bidder || "No bids yet"}
          </p>
          <p>
            <strong>Category:</strong> {categoryName}
          </p>

          <div className="bid-form">
            <input
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder="Enter your bid"
            />
            <button onClick={handleBid} className="place-bid-btn">
              Place Bid
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default BidDetails;
