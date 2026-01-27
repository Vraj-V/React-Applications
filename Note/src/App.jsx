import {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [Task, setTask] = useState([]);
  
  const submitHandler=(e)=>{
    e.preventDefault();
    
    const copyTask = [...Task];
    
    copyTask.push({title,note});
    
    setTask(copyTask);
    setTitle('');
    setNote('')
  }

  const deleteNote =(idx)=>{
    const copyTask = [...Task];

    copyTask.splice(idx,1);

    setTask(copyTask);
  }
  return (
<div className='min-h-screen lg:flex bg-black text-white font-medium gap-5 overflow-hidden'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2  p-10 gap-5 items-start flex-col'>
        
        <h1 className='text-3xl font-bold'>Add Note</h1>
          
          <input
            type="text"
            placeholder='Enter the Note heading'
            className='px-5 py-3 w-full font-medium border-2 outline-none rounded'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
          />

          <textarea
            type='text'
            className='px-5 py-3 w-full font-medium h-32 border-2 outline-none rounded'
            placeholder='Write Details'
            value={note}
            onChange={(e)=>{
              setNote(e.target.value);
            }}
          />

          <button className='bg-white font-medium w-full text-black px-5 py-3 rounded active:scale-95'>
            Add Note
          </button>
      </form>

      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Note</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5  h-full overflow-auto'>

    {Task.map(function(e,idx){
          return <div key={idx} className="flex justify-between flex-col items-start relative w-full sm:w-64 md:w-52 h-50 bg-cover pt-9 pb-4 px-4 rounded-2xl bg-white p-7">
            { 
            /* Use when online   bg-url('https://www.bing.com/th/id/OIP.rQE-2z4GsRRsCjlZrqiffwHaKX?w=162&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')] */}
            <div>
              <h3 className='font-bold leading-tight text-2xl text-black'>{e.title}</h3>
            <p className='mt-4 text-gray-600 px-2 font-semibold '>{e.note}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full font-bold text-l p-1 bg-red-500 rounded-4xl cursor-pointer active:scale-95'>Delete</button>
        </div>
        })}

        </div>
      </div>

    </div>
  )
}

export default App

