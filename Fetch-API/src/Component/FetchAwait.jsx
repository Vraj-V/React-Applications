import React from 'react'

const FetchAwait = () => {
    
    const getData = async()=>{
              console.log("awaiting for you request fecth async")

        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json();
      console.log(data);
    }
  return (
    <div>
        <button onClick={getData}>Post</button>
    </div>
  )
}

export default FetchAwait