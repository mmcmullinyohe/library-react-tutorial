import React, { useState } from "react";
import { books } from "../data";

const Books = ({ books: initialBooks }) => {
    const [books, setBooks] = useState(initialBooks);
    return (
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">All Books</h2>
                                <select id="filter" defaultValue="DEFAULT">
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW TO HIGH">Price, Low to High</option>
                                    <option value="HIGH TO LOW">Price, High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                              {
                                books.map((book) => (
                                <Book book={book} key={book.id} />
                                ))}  
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Books;