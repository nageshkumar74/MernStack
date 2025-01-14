import React from "react";


const months=[
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const Dropdown=({selected,onChange})=>{
 <select className="border p-2  rounded" value ={selected} onChange={(e)=>(e.target.value)}>
    {
        months.map((month)=>{
            <option key={month} value={month}>
                {month}
            </option>
        })
    }
    
 </select>


}

export default Dropdown;