import React from 'react';
import Aux from './Aux';
import Book from './Book';
import Styles from './css/main.module.css'

const Shelf= (props)=>{
    const {books, key, title, onShelfUpdate, handleChange} = props
    
    return(
        <Aux>
            <div>
                <h1>{title}</h1>
                <div className={Styles.shelf}>
                {books.map((b)=>(
                   <Book
                   key={key}
                   id={b.id}
                   cover={`url(${b.imageLinks.thumbnail})`}
                   onShelfUpdate={onShelfUpdate}
                   book={b}
                   handleChange={handleChange}
               />
                ))}

                    
                </div>
            </div>
        </Aux>
    )
}

export default Shelf