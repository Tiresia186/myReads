import React, { Component } from "react";
import Styles from "./css/main.module.css";
import Aux from "./Aux";
import Search from "./Search";
import Book from "./Book";
import Button from "./Button";
import * as BooksAPI from "./BooksAPI";

class Library extends Component {
    state = {
        books: [],
        query: "",
    };
    
    componentDidMount() {
        BooksAPI.getAll().then((books) =>
            this.setState(() => ({
                books,
            }))
        );
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim(),
        }));
    };

    clearQuery = () => {
        this.updateQuery("");
    };

    render() {
        const { books, query } = this.state;
        console.log(books);

        const showingBooks =
            query === ""
                ? books
                : books.filter((b) =>
                      b.title.toLowerCase().includes(query.toLowerCase())
                  );

        return (
            <Aux>
                <div className={Styles.Library}>
                    <Search onUpdateQuery={this.updateQuery} />

                    <h1 style={{ textAlign: "center" }}>Book Store</h1>
                    <div className={Styles.bookStore}>
                        {showingBooks.map((b) => (
                            <li key={b.key}>
                                <Book
                                   
                                    cover={`url(${b.imageLinks.thumbnail})`}
                                />
                            </li>
                        ))}
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Library;
