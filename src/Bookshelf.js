import React, { Component } from "react";
import Aux from "./Aux";
import Shelf from "./Shelf";
import Styles from "./css/main.module.css";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";

class BookShelf extends Component {
    componentDidMount() {
        this.props.onClearQuery();
    }

    handleChange = () => {};
    render() {
        const { query, onUpdateQuery, books, onShelfUpdate, onClearQuery } =
            this.props;
        const showingBooks =
            query === ""
                ? books
                : books.filter((b) =>
                      b.title.toLowerCase().includes(query.toLowerCase())
                  );

        const shelves = [
            {
                name: "Read",
                books: showingBooks.filter((b) => b.shelf === "read"),
            },
            {
                name: "Current Reading",
                books: showingBooks.filter(
                    (b) => b.shelf === "currentlyReading"
                ),
            },
            {
                name: "Want To Read",
                books: showingBooks.filter((b) => b.shelf === "wantToRead"),
            },
        ];

        return (
            <Aux>
                {console.log(books)}
                <Search onUpdateQuery={onUpdateQuery} />

                <ul className={Styles.bookShelf}>
                    {shelves &&
                        shelves.map((s) => (
                            <Shelf
                                key={s.name}
                                title={s.name}
                                books={s.books}
                                onShelfUpdate={onShelfUpdate}
                                handleChange={this.handleChange}
                            />
                        ))}
                </ul>
            </Aux>
        );
    }
}

export default BookShelf;
