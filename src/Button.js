import React from "react";
import Styles from "./css/main.module.css";
import { PlusOutlined, ArrowLeftOutlined} from "@ant-design/icons";
import { Link, Route } from "react-router-dom";
import Aux from "./Aux";

const Button = (props) => {
    return (
        <Aux>
        <Route exact path='/' render={()=>(

            <Link to='/store' className={Styles.addButton}>
            <PlusOutlined
                style={{
                    color: "white",
                    fontSize: "40px",
                    margin: "17px 0 0 19px",
                }}
            />
        </Link>)}/>
        <Route exact path='/store' render={()=>(

            <Link to='/' className={Styles.addButton}>
            <ArrowLeftOutlined
                style={{
                    color: "white",
                    fontSize: "30px",
                    margin: "25px 0 0 23px",
                }}
            />
        </Link>)}/>
        </Aux>
    );
};

export default Button;
