import React from "react";
import Styles from "./css/main.module.css";
import Aux from "./Aux";
import { ContactsOutlined } from "@ant-design/icons";

const Book = (props) => {
    const { cover, onShelfUpdate, id, book, handleChange} = props;

    return (
        <div style={{ backgroundImage: cover }} className={Styles.book}>
           
            <div className={Styles.dropdownContent}>
                <li>
                    {" "}
                    view
                </li>
                <li onClick={(e)=>{handleChange(book.shelf, 'currentlyReading') ; onShelfUpdate(book, 'currentlyReading')}}>
                     Current Readings
                </li >

                <li onClick={(e)=>{handleChange(book.shelf, 'wantToRead') ; onShelfUpdate(book, 'wantToRead')}}>
                    {" "}
                    Want To Read 
                </li>
                <li onClick={(e)=>{handleChange(book.shelf, 'read') ; onShelfUpdate(book, 'read')}}>
                    {" "}
                    Read
                </li>

            </div>
        </div>
    );
};

export default Book;
