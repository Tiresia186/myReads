import React, { Component } from "react";
import Styles from "./css/main.module.css";
import Aux from "./Aux";
import Search from "./Search";
import Book from "./Book";
import Button from "./Button";
import * as BooksAPI from "./BooksAPI";
import { render } from "@testing-library/react";

class Library extends Component {
    state = {
        shelfChange: false,
        flag: true,
        
        query: "",
    };

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim(),
        }));
    };

    clearQuery = () => {
        this.updateQuery("");
    };

    /*showMessageHandler = (prevState) => {
        this.setState((prevState) => ({
            shelfChange: !prevState.shelfChange,
        }));
        setTimeout(() => {
            this.setState((currentState) => ({
                flag: !currentState.flag,
            }));
        }, 1500);
    };*/

    checkShelf = (currentShelf, nextShelf) => {
        currentShelf === nextShelf
            ? this.setState(() => ({
                  flag: false
              })) && setTimeout(() => {
                this.setState((currentState) => ({
                    flag: true,
                }));
            }, 1500)
            : this.setState(() => ({
                 flag:true
              }));
        
        this.setState((prevState) => ({
            shelfChange: true
        }));
        setTimeout(() => {
            this.setState((currentState) => ({
                shelfChange: false,
            }));
        }, 1500);

        console.log(currentShelf)
        console.log(nextShelf)
    };

    render() {
        const { books, onShelfUpdate, onUpdateQuery } = this.props;
        console.log(books);
        const {  query, flag, shelfChange } = this.state;

        const showingBooks =
            query === ""
                ? books
                : books.filter((b) =>
                      b.title.toLowerCase().includes(query.toLowerCase())
                  );

        const showMessage = !flag ? (
            <div className={Styles.showErrorMessage}>
                <p> the book is already in the selected shelf </p>
            </div>
        ) : (
            <div className={Styles.showMessage}>
                <p> the books has been succesfully moved </p>
            </div>
        );

        return (
            <Aux>
                <div className={Styles.Library}>
                    <Search onUpdateQuery={this.updateQuery} />
                    {shelfChange && showMessage}

                    {console.log(shelfChange)}

                    <h1 style={{ textAlign: "center" }}>Book Store</h1>
                    <div className={Styles.bookStore}>
                        {showingBooks.map((b) => (
                            <li key={b.key}>
                                <Book
                                    onShelfUpdate={onShelfUpdate}
                                    cover={`url(${b.imageLinks.thumbnail})`}
                                    book={b}
                                    handleChange={this.checkShelf}
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
