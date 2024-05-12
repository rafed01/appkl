import React, { useState, useEffect } from "react";
import api from "../api";
import { getUserId } from "../components/UserAuth";
import "../index.css";

function Profile() {
  const user_id = getUserId();
  console.log(user_id);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startprice, setStartprice] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend API
    api
      .get("/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const createItem = (e) => {
    e.preventDefault();
    api
      .post("/api/items/", {
        name: name,
        description: description,
        startprice: parseInt(startprice),
        creator: user_id,
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
        <label htmlFor="startprice">Starting price</label>
        <br />
        <input
          type="number"
          id="startprice"
          name="startprice"
          onChange={(e) => setStartprice(e.target.value)}
          value={startprice}
          placeholder="00"
        />
        <br />
        <button className="" type="submit">
          Submit Item
        </button>
      </form>
      
      </div>
      <div className="profile_right">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
          <label htmlFor="inputPhone" className="form-label">Phone Number</label>
           
            <input
              type="text"
              class="form-control"
              id="inputPhone"
              placeholder=""

            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>

  );
}

export default Profile;
