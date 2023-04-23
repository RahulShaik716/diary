import React, { useState, useEffect } from "react";
import { get } from "../DB/mongodb";
import Card from "./Card";

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log('mount called')
        const result = get();
        if(result)
        setList(result)
        else
        setList([])
    }, []);

    return (
      <>  
       {list.length > 0 ? (<div className="container">
            {list.map((item) => (
                <Card key={item} item={item} />
            )) }
        </div>): (<div className="noentry"> <h1>No entries till now</h1> </div>)
        }
        </>
    );
};

export default List;
