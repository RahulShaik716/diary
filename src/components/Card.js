import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div
            className="child"
            onClick={() => {
                console.log("clicked");
                navigate("/", { state: item })
            }}
        >
            <label className="datetitle">{new Date(item.time).toDateString()}</label>
            <div className="desc">{item.content}</div>
        </div>
    );
};

export default Card;
