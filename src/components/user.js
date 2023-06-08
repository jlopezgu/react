import CustomDataTable from './customDataTable'




const User = () => {
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      width: '50px'
    },
    {
      name: 'Username',
      selector: row => row.username,
      width: '180px'
    },
    {
      name: 'Name',
      selector: row => `${row.first_name} ${row.last_name}`,
      width: '180px'
    },
    {
      name: 'Email',
      selector: row => row.email,
      width: '200px'
    },
    {
      name: 'Phone Number',
      selector: row => row.phone_number,
      width: '130px'
    },
    {
      name: 'Subscribed',
      selector: row => row.subscribed.join(),
      width: '180px'
    },
    {
      name: 'Channels',
      selector: row => row.channels.join(),
      width: '150px'
    },
  ]

  return <CustomDataTable columns={columns} id="users"/>
}

export default User
