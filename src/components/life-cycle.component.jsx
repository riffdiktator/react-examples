import React from "react";
import {useSelector} from 'react-redux'
import { selectCounterValue } from "../store/counter/counter.selector";


const LifeCycle = () => {
    const counter = useSelector(selectCounterValue)

    return <div>Counter value: {counter}</div>;
}

export default LifeCycle;
