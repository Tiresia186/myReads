import React from "react";
import Styles from "./css/main.module.css";
import Aux from "./Aux";
import { ContactsOutlined } from "@ant-design/icons";

const Book = (props) => {
    const { cover, onShelfUpdate, id, book } = props;

    return (
        <div style={{ backgroundImage: cover }} className={Styles.book}>
           
            <div className={Styles.dropdownContent}>
                <li>
                    {" "}
                    view
                </li>
                <li value='CurrentlyReading'onClick={e=>onShelfUpdate(book, e.target.value)}>
                     Current Readings
                </li >

                <li value='wantToRead'>
                    {" "}
                    Want To Read 
                </li>
                <li value='read'>
                    {" "}
                    Read
                </li>

            </div>
        </div>
    );
};

export default Book;
