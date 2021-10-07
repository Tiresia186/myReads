import react from "react";
import Styles from "./css/main.module.css";

const Search = (props) => {
    let { onUpdateQuery } = props;

    return (
        <input
            className={Styles.searchBook}
            type='text'
            placeholder='search books'
            onChange={(event) => onUpdateQuery(event.target.value)}></input>
    );
};

export default Search;
