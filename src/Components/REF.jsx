import React, {useState, useEffect, useRef} from "react";

const REF = () => {
    const [state, setState] = useState(0);

    let refCount = useRef(0);

    const IncreaseCount = () => {
        setState(() => state + 1);
    }

    const IncreaserefCount = () => {
        refCount.current = refCount.current + 1;
    }
    useEffect(() => {
        console.log("Component Rendered");
    })

    return(
        <div>
            <p>State Count Value : {state}</p>
            <button onClick = {() => IncreaseCount()}>Increamenting Value</button>
            <hr/>
            <p>Reference Count Value : {refCount.current}</p>
            <button onClick={() => IncreaserefCount()}>Reference Value</button>
        </div>
    )
}
export default REF;