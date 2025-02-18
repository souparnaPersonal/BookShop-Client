import { useGetAllBooksQuery } from "../redux/features/books/booksApi";
import { TBook } from "../types";
import BookCard from "../components/BookCard";
import { useState } from "react";

export const Products = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setsearchQuery] = useState("");
  const [itemsPerPage, setitemsPerPage] = useState();
  const queryParams = {};

  if (selectedCategory) queryParams.category = selectedCategory;
  if (searchQuery) queryParams.search = searchQuery;
  if (itemsPerPage) queryParams.limit = itemsPerPage;

  // Fetch books dynamically
  const {
    data: books,
    error,
    isLoading,
  } = useGetAllBooksQuery(
    Object.keys(queryParams).length ? queryParams : undefined
  );

  console.log("api result", books);
  // Function to handle category change
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  // Filter books based on selected category
  const filteredBooks = books?.data?.filter(
    (book: TBook) =>
      selectedCategory === "All" || book.category === selectedCategory
  );
  console.log("filter books array", filteredBooks);
  return (
    // <section className="py-8 antialiased  md:py-12">
    //   <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    //     <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
    //       {books?.data?.map((book: TBook, index: number) => (
    //         <BookCard key={index} book={book} index={index} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside
            className={`bg-gray-100 p-4 rounded-lg md:col-span-1 transition-transform duration-300 
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          } 
          fixed md:static left-0 top-0 h-full md:h-auto w-64 md:w-auto md:block shadow-lg md:shadow-none`}
          >
            <button
              className="md:hidden mb-4 text-gray-600"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✖ Close
            </button>
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-3">
              <label className="block">
                <span className="text-gray-700">Category</span>
                <select
                  className="block w-full mt-1 p-2 border rounded"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option>All</option>
                  <option>Fiction</option>
                  <option>Science</option>
                  <option>SelfDevelopment</option>
                  <option>Poetry</option>
                  <option>Religious</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Price Range</span>
                <input type="range" className="w-full mt-1" />
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">Available in Stock</span>
              </label>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Sidebar Toggle Button for Mobile */}
            <button
              className="md:hidden mb-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰ Filters
            </button>

            <div className="mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {books?.data?.map((book: TBook, index: number) => (
                <BookCard key={index} book={book} index={index} />
              ))}

              {books?.data?.length === 0 && <h1>No book Available</h1>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
