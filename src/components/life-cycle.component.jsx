import React, { useContext } from "react";
import { CounterContext } from "../contexts/counter.context";


const LifeCycle = () => {
    const {counter} = useContext(CounterContext)

    return <div>Counter value: {counter}</div>;
}

export default LifeCycle;
