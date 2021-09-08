


import React, {useState} from 'react'
import '../src/Style.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

 const CC2 = () => {
    let [count, Setcount] = useState(0)
    const increment = ()=> {
        Setcount(count + 1)
    }

    const decrement = ()=> {
        Setcount(count - 1)
    }
    return (
        <div className = "new">
            <button className = "btn" onClick = {decrement}><RemoveIcon/></button>
            <h1>{count}</h1>
            <button className = "btn" onClick = {increment}><AddIcon/></button>
            
           
        </div>
    )
}

export default CC2