import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookShelf from "./Bookshelf";
import Header from "./Header";
import Search from "./Search";
import Button from "./Button";
import Library from "./Library";
import { Route } from "react-router";
import Aux from "./Aux";
import * as BooksAPI from "./BooksAPI";

class App extends Component {
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

    shelfUpdate=(book, shelfName) =>{
      const {books} = this.state;
      const updateIndex = books.findIndex(b=> b.id === book.id)
      const updateBook= books[updateIndex]
      updateBook.shelf= shelfName

     

      BooksAPI.update(book, shelfName).then(()=>{
          this.setState({
              books: [...books.slice(0, updateIndex), updateBook , ...books.slice(updateIndex + 1)]
  
          })
          
      })
  }
    render() {
        const { books, query } = this.state;

        return (
            <div className='App'>
                <Route
                    exact
                    path='/store'
                    render={() => (
                        <Library
                            books={this.state.books}
                            query={this.state.query}
                            onUpdateQuery={this.updateQuery}
                            onShelfUpdate={this.shelfUpdate}

                        />
                    )}
                />
                <Route
                    exact
                    path='/'
                    render={() => (
                        <Aux>
                            <BookShelf
                                onUpdateQuery={this.updateQuery}
                                query={this.state.query}
                                books={this.state.books}
                                onShelfUpdate={this.shelfUpdate}
                                onClearQuery={this.clearQuery}



                            />
                        </Aux>
                    )}
                />

                <Button />
            </div>
        );
    }
}

export default App;
