import React, { useEffect, useState } from 'react'
import { getTable, postTable, deleteTable } from './API'
import TableItem from './components/table'



const App: React.FC = () => {
  const [tables, setTables] = useState<Table[]>([])

  useEffect(() => {
    fetchTables()
  }, [])

  const fetchTables = (): void => {
    
    getTable()
    .then(({ data }: Table[] | any) => setTables(data))
    .catch((err: Error) => console.log(err+"fel i fetch"))
  }

  
  console.log(tables)

  const handleDeleteTable = (id: string): void => {
    deleteTable(id)
    .then(({ status, data }) => {
        if (status !== 202) {
          
          throw new Error('Error! Todo not deleted')
        }
        fetchTables()
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>Tables</h1>
      
      {tables.map((table: Table) => (
        <TableItem
          key={table.id}
          
          deleteTable={handleDeleteTable}
          table={table}
        />
      ))}
    </main>
  )
}

export default App