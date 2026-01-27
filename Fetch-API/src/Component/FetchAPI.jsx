import  axios from 'axios';

const FetchAPI = (props) => {

    const getData = () =>{
                console.log("awaiting for you request fetch")
        const response =  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(data => console.log(data))
    }
    return (
    <div>
        <button onClick={getData}>Data</button>
    </div>
  )
}

export default FetchAPI