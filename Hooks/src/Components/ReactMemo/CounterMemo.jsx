import React from 'react'

const CounterMemo = React.memo(({count}) => {
    console.log("rendering the component!")
  return (
    <div>
        <h2>Count is : {count}</h2>
    </div>
  )
}
)
export default CounterMemo;