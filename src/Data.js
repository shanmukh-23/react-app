


import React,{useEffect, useState} from 'react'

const Data = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos").then(
          response => response.json()
      ).then(json => setData(json))
    },[])
    return (
        <div>
            {data.map(item =><h5 key={item.id}>{item.title}</h5>)}
        </div>
    )
}

export default Data
