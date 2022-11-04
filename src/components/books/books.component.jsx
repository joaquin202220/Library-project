import "./books.style.scss";
import BOOKS from "../../books.json";

const Books = () => {
  return (
    <div className="books-section-items">
      {BOOKS.map((book) => {
        const { name, price, id } = book;

        return (
          <div key={id} className="books-section-items-item">
            <h2>{name}</h2>
            <div className="img">Img</div>
            <span>${price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
