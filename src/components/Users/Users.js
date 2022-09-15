import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUser] = useState([]);
  const [loading,setLoading]=useState(true)
  
  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setUser(res.data))
    .catch()
    .finally(setLoading(false))
  },[])


  return (
    <div>
        {loading && <div>Loading...</div>}
        {users.map((user,index)=>(
            <div key={index}>{user.name}</div>
        ))}
    </div>
  );
}

export default Users;
