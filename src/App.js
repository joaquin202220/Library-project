import Books from "./components/books/books.component";
import BooksTitle from "./components/books-title/books-title.component";
import BooksFilter from "./components/books-filter/books-filter.component";
import Navigation from "./components/navigation/navigation.component";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="sec-one">
        <Navigation />
      </div>

      <div className="sec-two">
        <BooksFilter />
        <div className="books-section">
          <BooksTitle />
          <Books />
        </div>
      </div>
    </div>
  );
};

export default App;
