import React,{useState} from 'react'

const Theme = () => {
      const [theme,setTheme] = useState('Dark')
    
    
    function changeTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    }


    const themeStyle = {
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
        minHeight: '100vh'
        };

  return (
    <div>
    <div style={themeStyle}>
    <button
    onClick={changeTheme}
    className="px-5 py-2 font-bold border-4 shadow-xl rounded-xl m-5"
    >
    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
    </div>

    </div>
  )
}

export default Theme