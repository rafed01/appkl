import HomeButton from "../components/HomeButton";
import { useState, useEffect } from "react";
import api from "../api";

function Profile() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startprice, setStartprice] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetch categories from the backend API
    api.get("/api/categories")
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
        startprice: startprice,
        category: selectedCategory
      })
      .then((res) => {
        if (res.status === 201) alert("Item Submitted!");
        else alert("Failed to submit item");
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <HomeButton />
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
        <label htmlFor="category">Select Category</label>
        <br />
        <select
          id="category"
          name="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <br />
        <button className="form-button" type="submit">
          Submit Item
        </button>
      </form>
    </div>
  );
}

export default Profile;
