import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Explore = () => {
    return (
        <section id="id">
            <div className="container">
                <div className="row">
                    <div className="row row__column">
                        <h2>
                            Explore more <span className="purple">
                                Books
                            </span>
                        </h2>
                        <Link to="/books">
                        <button className="btn">Explore books</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;