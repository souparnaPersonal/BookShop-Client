import React, { useState } from "react";
import { useAddBookMutation } from "../redux/features/admin/productManagement.api";

const BookForm: React.FC = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: 0,
    category: "Fiction",
    description: "",
    quantity: 1,
    imageUrl: "", // Store uploaded image URL
  });

  const [addBook, { data, error }] = useAddBookMutation();

  const [loading, setLoading] = useState(false);
  console.log(data, error);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;

    const apiKey = "61b1d964b41459f4e8c1a750dd7ac04c"; // Replace with your ImgBB API Key
    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        setBook((prev) => ({ ...prev, imageUrl: result.data.url }));
      } else {
        alert("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Book Data:", book);
    addBook(book);
    alert("Book submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add a Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Price ($)</label>
            <input
              type="number"
              name="price"
              value={book.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={book.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            >
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
              <option value="SelfDevelopment">Self Development</option>
              <option value="Poetry">Poetry</option>
              <option value="Religious">Religious</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={book.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={book.quantity}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Upload Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
            {loading && <p className="text-blue-500 mt-2">Uploading...</p>}
            {book.imageUrl && (
              <img
                src={book.imageUrl}
                alt="Book Cover"
                className="mt-4 rounded-lg w-full"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
