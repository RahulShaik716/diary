import React, { useState } from 'react';
import { insert } from '../DB/mongodb';
import { useLocation, useNavigate } from 'react-router-dom';

const Write = (props) => {
    const location = useLocation();
    const {state} = location;
    const [time, setTime] = useState(state ? state.time : null);
    const [content, setContent] = useState(state ? state.content : '');
    const navigate = useNavigate();

    const update = (event) => {
        if(!state)
        setTime(new Date())

        setContent(event.target.value);
    }

    const submit = () => {
        let result;
        if(!state)
        result = insert({ time, content });
        else
        result = update({_id : state._id, content : content})
        if(result)
        navigate('/list');

    }

    return (
        <div className="bg">
            <h1> {new Date().toDateString()}</h1>
            <textarea className="writingarea" onChange={update} value={content}></textarea>
            <button className="submit" onClick={submit}>Save</button>
        </div>
    )
}

export default Write;
