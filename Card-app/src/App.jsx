import React from 'react'
import Card from './Components/Card';
import User from './Components/User';
import { Car } from 'lucide-react';

const App = () => {

const jobs = [
  {
    id: 1,
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UX/UI Designer",
    tag1: "Part time",
    tag2: "Senior level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    brandLogo: "https://www.bing.com/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?w=324&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    company: "Meta",
    datePosted: "10 days ago",
    post: "Product Designer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Pune, India"
  },
  {
    id: 5,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    datePosted: "6 weeks ago",
    post: "Full Stack Developer",
    tag1: "Contract",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "Remote"
  },
  {
    id: 6,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: "$95/hr",
    location: "Noida, India"
  },
  {
    id: 7,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    company: "Tesla",
    datePosted: "4 days ago",
    post: "Data Analyst",
    tag1: "Part time",
    tag2: "Junior level",
    pay: "$70/hr",
    location: "Austin, USA"
  },
  {
    id: 8,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    company: "OpenAI",
    datePosted: "8 weeks ago",
    post: "AI Research Assistant",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$160/hr",
    location: "San Francisco, USA"
  },
  {
    id: 9,
    brandLogo: "https://www.bing.com/th/id/OIP.tBxqXYGufdbsXBFIzBRm-wHaHa?w=186&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    company: "Adobe",
    datePosted: "9 days ago",
    post: "UI Designer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    id: 10,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    company: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$170/hr",
    location: "California, USA"
  }
];

  return (
    <div className='parent' >
      {/* <h1>{jobs.map(e => e.company)}</h1> */}
      {jobs.map((value)=>{
        // console.log(value.company);
        return(
          <Card 
          key = {value.id}
          brandLogo = {value.brandLogo}
          company= {value.company}
          datePosted = {value.datePosted}
          post = {value.post}
          tag1 = {value.tag1}
          tag2 = {value.tag2}
          pay ={value.pay}
          location = {value.location}
          />
        )
      })}

  </div>
  )
}

export default App;

