import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const [detail, setdetail] = useState([])
    const{_id}= useParams()

  
    const getData = async () => {
        let res = await axios.get(`http://localhost:8080/education/${_id}`);
    
        setdetail(res.data);
      };
      useEffect(() => {
        getData();
      }, []);
 
  return (
    <div><h1>{detail.name}</h1>
    <h1>{detail.author}</h1>
    <h1>{detail.guide}</h1>

    </div>
  )
}

export default Detail


