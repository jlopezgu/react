import CustomDataTable from "./customDataTable";

const notification = () => {
    const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      width: '50px'
    },
    {
      name: 'User',
      selector: row => row.user,
      width: '200px'
    },
    {
      name: 'Message',
      selector: row => row.message,
      width: '325px'
    },
    {
      name: 'Channel',
      selector: row => row.channel,
      width: '100px'
    },
    {
      name: 'Created',
      selector: row => Date(row.created),
      width: '400px'
    }
  ]

  return <CustomDataTable columns={columns} id="notifications"/>
}

export default notification
