import CustomDataTable from "./customDataTable";

const category = () => {
    const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      width: '100px'
    },
    {
      name: 'Name',
      selector: row => row.name,
      width: '150px'
    },
    {
      name: 'Created',
      selector: row => Date(row.created),
      width: '500px'
    }
  ]

  return <CustomDataTable columns={columns} id="category"/>
}

export default category
