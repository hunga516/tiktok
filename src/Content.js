import { memo } from "react";

function Content({ onStart, count }) {

    console.log(onStart);

    return (
        <>
            <h1>Hiiii</h1>
            <hi>{count}</hi>
            <button onClick={onStart}>Start</button>
        </>

    )
}

export default memo(Content);