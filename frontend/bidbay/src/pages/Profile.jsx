import React, { useState } from "react";
import api from "../api";
import "../index.css";
import { getUserId } from "../components/UserAuth";

function Profile() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [starting_price, setStarting_price] = useState("");
  const [agreeChecked, setAgreeChecked] = useState(false);
  const userId = getUserId();

  const [formData, setFormData] = useState({
    phone: "",
    fullname: "",
    adress: "",
    city: "",
    email: "",
    zip: "",
    state: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/userinfo/", formData);
      if (response.status === 201) {
        alert("User info submitted successfully!");
      } else {
        alert("Failed to submit user info");
      }
    } catch (error) {
      console.error("Error submitting user info:", error);
      alert("Error submitting user info" + error);
    }
  };

  const createItem = (e) => {
    e.preventDefault();
    if (!agreeChecked) {
      alert("Please agree to the terms before submitting.");
      return;
    }
    api
      .post("/api/items/", {
        name: name,
        description: description,
        starting_price: parseInt(starting_price),
      })
      .then((res) => {
        if (res.status === 201) {
          alert("Item Submitted!");
        } else {
          alert("Failed to submit item");
        }
      })
      .catch((err) => {
        alert("Error submitting item: " + err);
      });
  };

  return (
    <div className="profile-container">
      <div className="profile_left">
        <h1>Profile page</h1>
        <h2>Post Item for review</h2>
        <form onSubmit={createItem}>
          <label htmlFor="name">Item Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Type item name"
          />
          <br />
          <label htmlFor="description">Item description</label>
          <br />
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Item description"
          />
          <br />
          <label htmlFor="starting_price">Starting price</label>
          <br />
          <input
            type="number"
            id="starting_price"
            name="starting_price"
            onChange={(e) => setStarting_price(e.target.value)}
            value={starting_price}
            placeholder="00"
          />
          <br />
          <button className="" type="submit">
            Submit Item
          </button>
          <div className="checkbox">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={agreeChecked}
              onChange={(e) => setAgreeChecked(e.target.checked)}
            />
            <label htmlFor="agree">
              Agree to send images and location separately to our email
            </label>
          </div>
        </form>
      </div>
      <div className="profile_right">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="adress"
              onChange={handleChange}
              value={formData.adress}
            />
          </div>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              placeholder="flen ben foulen"
              name="fullname"
              onChange={handleChange}
              value={formData.fullname}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPhone" className="form-label">
              Phone Number
            </label>

            <input
              type="text"
              className="form-control"
              id="inputPhone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              placeholder=""
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              onChange={handleChange}
              value={formData.city}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              name="state"
              onChange={handleChange}
              value={formData.state}
              type="text"
              className="form-control"
              id="inputState"
            />
          </div>

          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input
              name="zip"
              onChange={handleChange}
              value={formData.zip}
              type="text"
              className="form-control"
              id="inputZip"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
