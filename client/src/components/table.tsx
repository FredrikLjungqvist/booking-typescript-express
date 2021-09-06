import React from "react"

type Props = TableProps & {
    
    bookTable: (id: string) => void
    deleteTable: (_id: string) => void
    
}

const bookedDateDisplay:string = new Date().toLocaleDateString('se-SE')
const TableItem: React.FC<Props> = ({table, bookTable, deleteTable}) => {
 
  
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
        <button
          onClick={() => bookTable(table.id)}
          className={!table.available ? `hide-button` : 'Card--button__done'}
        >
          Book
        </button>
        <p
        className={table.available ?  `hide-button` : 'Card--button__done'}
        >Bokat: {bookedDateDisplay}</p>
        
       
      </div>
    </div>
  )
}

export default TableItem