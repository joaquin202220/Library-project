import { Outlet } from "react-router-dom";

import BooksTitle from "../../components/books-title/books-title.component";
import Books from "../../components/books/books.component";

const Home = () => {
  return (
    <div>
      <BooksTitle />
      <Books />
      <Outlet />
    </div>
  );
};

export default Home;
