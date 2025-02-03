import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const doorId=1
  // Get the existing item from the server
  const [item, setItem] = useState(null);
  // pass the item to UpdateItem as a prop
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await fetch(`${API_URI}/${doorId}`,{
          method:"GET",
        })
        const data=await response.json()
        setItem(data)
      }
      catch(err){
        console.log(err)
      }
    } 
    fetchData()
  },[API_URI,doorId])
  return <UpdateItem item={item} setItem={setItem}/>;
}

export default App;
