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
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state={
    books:[],
    query: ''
  }

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
     
        return (
            <div className='App'>
                <Route exact path='/store' render={() => <Library />} />
                <Route
                    exact
                    path='/'
                    render={() => (
                        <Aux>
                           
                            <BookShelf onUpdateQuery={this.updateQuery} query={this.state.query}/>
                        </Aux>
                    )}
                />

                <Button />
            </div>
        );
    }
}

export default App;
