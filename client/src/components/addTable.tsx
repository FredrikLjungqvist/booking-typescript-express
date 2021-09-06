import React, { useState } from "react";

type Props=  {
saveTable: (e: React.FormEvent, fromData: Table | any)=>void
}

const AddTable:React.FC<Props>=({saveTable})=>{

    const [formData, setFormData] = useState<Table | {}>()
   
    const handleForm= (e: React.FormEvent<HTMLInputElement>):void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
            
        })
        
    }
   
    return (
        <form 
        onSubmit={e => saveTable(e, formData)}
        className="Form"
        >
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleForm} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="seats">Seats</label>
                    <input onChange={handleForm} type="number"  id="seats" />
                </div>
            </div>
            <button disabled={formData=== undefined ? true : false }>Add Table</button>
        </form>
    )
}

export default AddTable;