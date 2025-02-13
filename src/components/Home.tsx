import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../redux/features/books/booksApi";
import { TBook } from "../types";
import BookCard from "./BookCard";

const Home = () => {
  const { data: books } = useGetAllBooksQuery(undefined);

  return (
    <>
      {" "}
      <div className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool title software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div className="lg:mt-0 lg:col-span-5 flex justify-center">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="hero-image"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
      <h1 className="text-center">Feature Products</h1>
      {/* <div className="grid grid-cols-3 gap-4 text-center">
        {books?.data?.slice(0, 6).map((book: TBook, index: number) => (
          <BookCard key={index} book={book} index={index} />
        ))}
      </div>
    
      <div className="text-center mt-11 ">
        <Link to={"/products"}>View All</Link>
      </div> */}
      {/* mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 */}
      <section className="py-8 antialiased  md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {books?.data?.slice(0, 6).map((book: TBook, index: number) => (
              <BookCard key={index} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>
      <div className="text-center">
        <Link
          to="/products"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          View All
        </Link>
      </div>
    </>
  );
};

export default Home;
