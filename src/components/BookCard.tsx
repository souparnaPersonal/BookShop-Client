import { Link } from "react-router-dom";
import { TBook } from "../types";

export default function BookCard({
  book,
  index,
}: {
  book: TBook;
  index: number;
}) {
  return (
    // <div className="w-80 p-4 shadow-lg rounded-2xl">
    //   <img
    //     src={book?.image_Link || "https://via.placeholder.com/150"}
    //     alt={book?.title}
    //     className="w-full h-40 object-cover rounded-md mb-4"
    //   />
    //   <div className="flex flex-col gap-2">
    //     <h3 className="text-lg font-semibold">{book?.title}</h3>
    //     <p className="text-sm text-gray-600">{book?.author}</p>
    //     <p className="text-md font-bold">${book?.price}</p>
    //     <Link to={`/products/${book?._id}`}>
    //       <Button size="small" className="mt-2 w-full">
    //         {index + 1}. View Details
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            alt=""
          />
          <img
            className="mx-auto hidden h-full dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
            alt=""
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {book.category}
          </span>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              data-tooltip-target="tooltip-quick-look"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only"> Quick look </span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {book.title}
        </a>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {book.author}
            </p>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Best Price
            </p>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            ₹{book.price}
          </p>
          <Link to={`/products/${book?._id}`} className="cursor-pointer">
            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 bg-amber-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
