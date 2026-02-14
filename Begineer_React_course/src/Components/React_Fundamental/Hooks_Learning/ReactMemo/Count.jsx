import React from "react";

const Count = React.memo(({ count }) => {
    console.log("Count rendering");
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
});
export default Count;