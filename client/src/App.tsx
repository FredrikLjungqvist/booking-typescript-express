import React, { useEffect, useState, FunctionComponent } from 'react'
import { getTable, postTable, deleteTable, updateTable, bookTable, getCatData } from './API'
import TableItem from './components/table'
import AddTable from './components/addTable'
import { JsxElement } from 'typescript'
import CatFact from './components/catFact'





const App: React.FC = () => {
  const [tables, setTables] = useState<Table[]>([])
  const factArray = []

  useEffect(() => {
    fetchTables()
    
  }, [])

  const fetchTables = (): void => {
    
    getTable()
    .then(({ data }: Table[] | any) => setTables(data))
    .catch((err: Error) => console.log(err+"fel i fetch"))
  }

  

  
  console.log(tables)

  const handleSaveTable = (e: React.FormEvent, formData: Table): void => {
    e.preventDefault()
    console.log(formData.seats)
    postTable(formData)
    .then(({ status, data }) => {
      console.log(status)
      console.log(data)
     if (status !== 201) {
       throw new Error('Error! Todo not saved')
     }
     fetchTables()
   })
   .catch((err) => console.log(err))
 }

  const handleDeleteTable = (id: string): void => {
    deleteTable(id)
    .then(({ status, data }) => {
        if (status !== 202) {
          
          throw new Error('Error! Table not deleted')
        }
        fetchTables()
      })
      .catch((err) => console.log(err))
  }

  const handleBooking = (id: string): void =>{
    bookTable(id)
    .then(({status, data})=>{
      if (status !==202){
        throw new Error("did not book")
      }
    })
  }


  const hanldeUpdateTable = (id: string): void => {
  
    updateTable(id)
    .then(({status, data})=>{
    if (status !==201){
      throw new Error("Table not updated")
    }
    fetchTables()
  })
  .catch((err) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>Tables</h1>
     
      <AddTable saveTable={handleSaveTable} />
      {tables.map((table: Table) => (
        <TableItem
          key={table.id}
          bookTable={hanldeUpdateTable}
          deleteTable={handleDeleteTable}
          table={table}
        />
        ))}
        <CatFact/>
    </main>
  )
}

export default App