import React, { useState } from "react";
import api from "../api";
import "../index.css";

function Profile() {
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [starting_price, setStarting_price] = useState("");
  const [agreeChecked, setAgreeChecked] = useState(false);

  

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
            <label htmlFor="agree">Agree to send images and location separately to our email</label>
          </div>
        </form>
      </div>
      <div className="profile_right">
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
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
              placeholder=""
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
  <label htmlFor="inputState" className="form-label">
    State
  </label>
  <select id="inputState" className="form-select" value="Tunis">
    <option defaultValue>Choose...</option>
    <option value="Tunis">Tunis</option>
  </select>
</div>

          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
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
