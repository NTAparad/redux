import React, {FunctionComponent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Type} from "../types/Type";
import {addHobby} from "../actions/actions";
import List from "./list/list";
import {HobbyState} from "../types/Hobby";

const Home: FunctionComponent = () => {
    const hobby = useSelector<Type, HobbyState>((state) => state.hobby)
    const dispatch = useDispatch()
    const handleClick = () => {
        const newHobby = {
            id: 2,
            hobby: "hello"
        }
        const action = addHobby(newHobby)
        dispatch(action)
    }
    return (
        <div className="home-page">
            <h1>hello</h1>
            <List todos={hobby.list}/>
            <button onClick={handleClick}>new</button>
        </div>
    );

};

export default Home;
