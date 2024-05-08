import React, { useState, useEffect } from "react";
import api from "../api";
import { getUserId } from "../components/UserAuth";

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
    <div>
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
  );
}

export default Profile;
