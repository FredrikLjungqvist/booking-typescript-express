import dotenv from "dotenv"
import React from "react"

type Props = TableProps & {
    
    deleteTable: (_id: string) => void
}

const TableItem: React.FC<Props> = ({table, deleteTable}) => {
 
  
  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1 className="">Namn: {table.name}</h1>
        <span className="">antal platser: {table.seats}</span>
      </div>
      
      <div className='Card--button'>
        
        <button
          onClick={() => deleteTable(table.id)}
          className='Card--button__delete'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TableItem