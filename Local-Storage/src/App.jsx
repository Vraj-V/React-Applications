
const App = () => {
  // Clear the Storage.
  // sessionStorage.clear()
  // localStorage.clear()

  // Type to Save the data
  localStorage.setItem("User","vraj");
  localStorage.setItem("Age",18);
  localStorage.setItem("array",[10,20,30]);
  localStorage.setItem("Object",{phone:"9791562645",add:'27 Street Road'})
  
  //Method to save the TypeOf of the data.
  localStorage.setItem('Number',JSON.stringify(2100));
  localStorage.setItem('ArrayConvert',JSON.stringify([10,20,30,40]))
  localStorage.setItem('ObjectConvert',JSON.stringify({Father:'kamlesh',Mother:'Daxaben'}));
  
  //Method to retrieve the data.
  const user = localStorage.getItem("User");
  const age = localStorage.getItem("Age");
  const array = localStorage.getItem("array");
  const object = localStorage.getItem("Object");

  //Method retrieve and Convert By to original form of typeOf.
  const num = JSON.parse(localStorage.getItem('Number'))
  const arrayConv = JSON.parse(localStorage.getItem("ArrayConvert"));
  const ObjectConv = JSON.parse(localStorage.getItem("ObjectConvert"));
  /*
  console.log(user,typeof(user))
  console.log(age,typeof(age))
  console.log(array,typeof(array))
  console.log(object,typeof(object)) //[Object, Object]

  console.log(num,typeof(num))
  console.log(arrayConv,typeof(arrayConv))
  console.log(ObjectConv,typeof(ObjectConv))
*/


  //Removing items
  localStorage.removeItem('User');
  // console.log(us  er)


  // Session Storage
  sessionStorage.setItem('Data','welcome');
  const message = sessionStorage.getItem('Data')
  console.log(message)
  return (
    <div> <h1>{user} {age}</h1></div>
  )
}

export default App