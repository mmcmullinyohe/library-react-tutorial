import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [img, setImg] = useState
  function imageLoaded() {
    console.log("imageLoaded")
  }
  return (
    <div className="book">
      {img ? (  
      <>    
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img 
          src={book.url} 
          alt="" 
          className="book__img" 
          onLoad={imageLoaded}
          />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      < Rating rating={book.rating}/>
      <Price 
      salePrice={book.salePrice} 
      originalPrice={book.originalPrice} 
      />
      </>
      ) : (
        <>
      <div className="book__img--skeleton"> </div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton rating--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div>
      </>
  )}
   </div>
  );
}

export default Book;
